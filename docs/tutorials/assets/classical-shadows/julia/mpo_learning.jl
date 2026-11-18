module ShadowMPOLearning

using LinearAlgebra, Random, Statistics
using RandomMeas

export PauliMPO, learn_mpo, learning_windows, local_coefficients, exact_coefficients,
       dense_operator, pauli_coefficients, operator_from_coefficients, mpo_overlap,
       split_settings, shadow_statistics, training_marginals, afc_terms, afc_exact,
       afc_estimate, afc_statistics, afc_prefix_curve, max_fidelity, to_itensor_mpo,
       from_coefficients, kicked_ising_reference, prefix_mpo, segment_mpo, pair_agreement,
       longest_clean_segment, fitted_prior, window_purity

const PAULIS = [ComplexF64[1 0; 0 1], ComplexF64[0 1; 1 0],
                ComplexF64[0 -im; im 0], ComplexF64[1 0; 0 -1]]
const PAULI_TRANSFORM = reduce(vcat, [reshape(vec(transpose(p)), 1, 4) for p in PAULIS])

"""Real tensor train of Pauli expectations: sigma = 2^-N sum_a c_a P_a.

Core axes are (left bond, I/X/Y/Z, right bond). Site 1 is the fastest
varying physical index. Real coefficients guarantee Hermiticity, not positivity.
"""
struct PauliMPO
    cores::Vector{Array{Float64,3}}
    function PauliMPO(cores)
        isempty(cores) && throw(ArgumentError("Need at least one site"))
        arrays = [Array{Float64,3}(a) for a in cores]
        size(first(arrays), 1) == size(last(arrays), 3) == 1 ||
            throw(ArgumentError("Open boundary bonds must have dimension one"))
        all(size(a, 2) == 4 && all(isfinite, a) for a in arrays) ||
            throw(ArgumentError("Expected finite Pauli cores"))
        all(size(arrays[j], 3) == size(arrays[j+1], 1) for j in 1:length(arrays)-1) ||
            throw(ArgumentError("Adjacent bonds do not match"))
        new(arrays)
    end
end

Base.length(m::PauliMPO) = length(m.cores)

function identity_mpo(n)
    n >= 2 || throw(ArgumentError("Two-site learning needs at least two qubits"))
    PauliMPO([reshape([1.0, 0, 0, 0], 1, 4, 1) for _ in 1:n])
end

function mode_product(x::AbstractArray, a::AbstractMatrix, axis::Int)
    order = vcat(axis, [j for j in 1:ndims(x) if j != axis])
    dims = size(x)[order]
    y = a * reshape(permutedims(x, order), dims[1], :)
    permutedims(reshape(y, size(a, 1), dims[2:end]...), invperm(order))
end

function pauli_coefficients(rho::AbstractMatrix)
    n = trailing_zeros(size(rho, 1))
    size(rho) == (2^n, 2^n) || throw(ArgumentError("Expected a qubit operator"))
    ishermitian(rho) || isapprox(rho, rho'; atol=1e-10) ||
        throw(ArgumentError("Expected a Hermitian operator"))
    order = vec(permutedims(hcat(1:n, n+1:2n)))
    x = reshape(permutedims(reshape(rho, fill(2, 2n)...), order), fill(4, n)...)
    for j in 1:n
        x = mode_product(x, PAULI_TRANSFORM, j)
    end
    real.(vec(x))
end

function operator_from_coefficients(c::AbstractVector)
    n = trailing_zeros(length(c)) ÷ 2
    length(c) == 4^n || throw(ArgumentError("Expected 4^n coefficients"))
    x = reshape(complex.(c), fill(4, n)...)
    for j in 1:n
        x = mode_product(x, PAULI_TRANSFORM' / 2, j)
    end
    order = vcat(1:2:2n, 2:2:2n)
    reshape(permutedims(reshape(x, fill(2, 2n)...), order), 2^n, 2^n)
end

"Exact tensor-train SVD of a small Pauli coefficient vector (reference checks only)."
function from_coefficients(c; maxbond=typemax(Int), rtol=1e-12)
    n = trailing_zeros(length(c)) ÷ 2
    n >= 1 && length(c) == 4^n || throw(ArgumentError("Expected 4^n coefficients"))
    cores = Array{Float64,3}[]
    rest, left = Float64.(c), 1
    for _ in 1:n-1
        f = svd(reshape(rest, left*4, :); full=false)
        rank = min(maxbond, max(1, count(>(rtol*maximum(f.S)), f.S)))
        push!(cores, reshape(f.U[:,1:rank], left,4,rank))
        rest = Diagonal(f.S[1:rank]) * f.Vt[1:rank,:]
        left = rank
    end
    push!(cores, reshape(rest,left,4,1))
    PauliMPO(cores)
end

"Exact shallow kicked-Ising reference in Pauli coordinates, with local depolarization."
function kicked_ising_reference(n, depth; depolarization=0.0)
    n >= 2 && depth >= 0 && 0 <= depolarization <= 1 || throw(ArgumentError("Invalid state parameters"))
    m = PauliMPO([reshape([1.0,0,0,1],1,4,1) for _ in 1:n])
    rx = cos(pi/8)*PAULIS[1] - im*sin(pi/8)*PAULIS[2]
    single = [real(tr(a*rx*b*rx'))/2 for a in PAULIS, b in PAULIS]
    zz = Diagonal(exp.(im*pi/4 .* [1,-1,-1,1]))
    basis = [kron(PAULIS[b],PAULIS[a]) for a in 1:4, b in 1:4]
    pair = [real(tr(a*zz*b*zz'))/4 for a in vec(basis), b in vec(basis)]
    for _ in 1:depth
        for j in 1:n
            m.cores[j] = mode_product(m.cores[j], single, 2)
        end
        for j in 1:n-1
            a,b = m.cores[j],m.cores[j+1]
            theta = reshape(reshape(a,:,size(a,3))*reshape(b,size(b,1),:),size(a,1),16,size(b,3))
            theta = mode_product(theta,pair,2)
            f = svd(reshape(theta,size(a,1)*4,:); full=false)
            rank = max(1,count(>(1e-12*maximum(f.S)),f.S))
            m.cores[j] = reshape(f.U[:,1:rank],size(a,1),4,rank)
            m.cores[j+1] = reshape(Diagonal(f.S[1:rank])*f.Vt[1:rank,:],rank,4,size(b,3))
        end
    end
    for a in m.cores
        a[:,2:4,:] .*= 1-depolarization
    end
    m
end

function trace_environments(m::PauliMPO, lo, hi)
    left, right = ones(1, 1), ones(1, 1)
    for j in 1:lo-1
        left = left * m.cores[j][:, 1, :]
    end
    for j in length(m):-1:hi+1
        right = m.cores[j][:, 1, :] * right
    end
    left, right
end

"Partial trace onto a prefix, retaining the boundary correlations of the original chain."
prefix_mpo(m::PauliMPO,n::Int) = segment_mpo(m,1:n)

"Partial trace onto a contiguous segment of the chain."
function segment_mpo(m::PauliMPO,interval::UnitRange{Int})
    check_interval(m,interval)
    cores=deepcopy(m.cores[interval])
    left,right=trace_environments(m,first(interval),last(interval))
    a=cores[1]; cores[1]=reshape(left*reshape(a,size(a,1),:),1,4,size(a,3))
    a=cores[end]; cores[end]=reshape(reshape(a,:,size(a,3))*right,size(a,1),4,1)
    PauliMPO(cores)
end

"""Agreement of measured nearest-neighbor ZZ correlators with a reference MPO.

For each pair (j, j+1), regress the measured correlator of every setting on the
value the reference predicts in the same basis and return the slope: about one
for a faithful pair, lower with noise, and near zero for a broken qubit or gate.
"""
function pair_agreement(group::MeasurementGroup, reference::PauliMPO)
    z = PAULIS[4]
    map(1:group.N-1) do j
        rho = operator_from_coefficients(local_coefficients(reference, j:j+1))
        predicted, measured = Float64[], Float64[]
        for data in group.measurements
            u = setting_matrices(data, j:j+1)
            rotation = kron(u[2], u[1])
            push!(predicted, real(tr(rho * rotation' * kron(z, z) * rotation)))
            s = data.measurement_results
            push!(measured, mean((3 .- 2 .* s[:, j]) .* (3 .- 2 .* s[:, j+1])))
        end
        dot(predicted, measured) / dot(predicted, predicted)
    end
end

"Longest run of qubits whose bonds all have agreement at least `threshold`."
function longest_clean_segment(agreement; threshold=0.5)
    best, start = 1:1, 1
    for j in 1:length(agreement)+1
        if j > length(agreement) || agreement[j] < threshold
            length(start:j) > length(best) && (best = start:j)
            start = j + 1
        end
    end
    best
end

function check_interval(m, interval)
    !isempty(interval) && first(interval) >= 1 && last(interval) <= length(m) ||
        throw(ArgumentError("Interval outside the chain"))
end

function local_coefficients(m::PauliMPO, interval::UnitRange{Int})
    check_interval(m, interval)
    left, right = trace_environments(m, first(interval), last(interval))
    x = left
    for j in interval
        a = m.cores[j]
        x = reshape(x * reshape(a, size(a, 1), :), :, size(a, 3))
    end
    vec(x * right)
end

function dense_operator(m::PauliMPO; max_qubits=10)
    length(m) <= max_qubits || throw(ArgumentError("Dense conversion exceeds max_qubits"))
    operator_from_coefficients(local_coefficients(m, 1:length(m)))
end

function exact_coefficients(rho::Union{MPS,MPO}, interval::UnitRange{Int})
    reduced = reduce_to_subsystem(rho, collect(interval))
    sites = get_siteinds(reduced)
    n = length(sites)
    matrix = reshape(Array(flatten(reduced), prime.(sites)..., sites...), 2^n, 2^n)
    pauli_coefficients(matrix)
end

function mpo_overlap(a::PauliMPO, b::PauliMPO)
    length(a) == length(b) || throw(ArgumentError("Chain lengths differ"))
    env = ones(1, 1)
    for (x, y) in zip(a.cores, b.cores)
        next = zeros(size(x, 3), size(y, 3))
        for p in 1:4
            next .+= transpose(x[:, p, :]) * env * y[:, p, :] / 2
        end
        env = next
    end
    only(env)
end

max_fidelity(a::PauliMPO, b::PauliMPO) =
    mpo_overlap(a, b) / max(mpo_overlap(a, a), mpo_overlap(b, b))

function to_itensor_mpo(m::PauliMPO, sites)
    length(sites) == length(m) || throw(ArgumentError("Site count differs"))
    links = [Index(size(m.cores[j], 3), "Link,learned=$j") for j in 1:length(m)-1]
    tensors = ITensor[]
    for j in 1:length(m)
        a = m.cores[j]
        data = zeros(ComplexF64, size(a, 1), 2, 2, size(a, 3))
        for p in 1:4, s in 1:2, t in 1:2
            data[:, s, t, :] .+= a[:, p, :] .* (PAULIS[p][s, t] / 2)
        end
        indices = vcat(j == 1 ? Index[] : [links[j-1]], [sites[j]', sites[j]],
                       j == length(m) ? Index[] : [links[j]])
        push!(tensors, ITensor(reshape(data, dim.(indices)...), indices...))
    end
    MPO(tensors)
end

"""Windows of the local updates: 2ell+2 qubits around each pair (two-site), or the
2ell+1 qubits I_j = [j-ell, j+ell] around each site (one-site, paper Eq. (4))."""
function learning_windows(n, ell; update=:one_site)
    update == :two_site && return [max(1, j-ell):min(n, j+1+ell) for j in 1:n-1]
    update == :one_site && return [max(1, j-ell):min(n, j+ell) for j in 1:n]
    throw(ArgumentError("update must be :two_site or :one_site"))
end

function local_frames(m, j, interval; width=2)
    left, right = trace_environments(m, first(interval), last(interval))
    for i in first(interval):j-1
        a = m.cores[i]
        left = reshape(left * reshape(a, size(a, 1), :), :, size(a, 3))
    end
    for i in last(interval):-1:j+width
        a = m.cores[i]
        right = reshape(reshape(a, :, size(a, 3)) * right, size(a, 1), :)
    end
    left, right
end

function pseudoinverses(left, right, rtol)
    sl, sr = svd(left; full=false), svd(right; full=false)
    kl = findall(>(rtol * maximum(sl.S)), sl.S)
    kr = findall(>(rtol * maximum(sr.S)), sr.S)
    isempty(kl) || isempty(kr) ? throw(ArgumentError("Singular trace environment")) : nothing
    il = sl.V[:, kl] * Diagonal(1 ./ sl.S[kl]) * sl.U[:, kl]'
    ir = sr.V[:, kr] * Diagonal(1 ./ sr.S[kr]) * sr.U[:, kr]'
    il, ir, length(kl) < size(left, 2) || length(kr) < size(right, 1)
end

"""Solve paper Eq. (4) for the single tensor at site j, with no truncation, and normalize.

The bond dimension stays fixed. The orthogonality center then moves one site in the
sweep direction (QR), which changes the tensors but not the state.
"""
function update_site!(m, j, interval, target; rtol, direction)
    left, right = local_frames(m, j, interval; width=1)
    il, ir, deficient = pseudoinverses(left, right, rtol)
    c = reshape(target, size(left, 1), 4, size(right, 2))
    theta = zeros(size(left, 2), 4, size(right, 1))
    for p in 1:4
        theta[:, p, :] = il * c[:, p, :] * ir
    end
    m.cores[j] = theta
    normtrace = local_coefficients(m, j:j)[1]
    isfinite(normtrace) && abs(normtrace) > 1e-12 ||
        throw(ArgumentError("Update produced a zero/nonfinite trace"))
    m.cores[j] ./= normtrace
    a = m.cores[j]
    if direction == :right && j < length(m)
        f = qr(reshape(a, size(a, 1)*4, size(a, 3)))
        q = Matrix(f.Q)
        m.cores[j] = reshape(q, size(a, 1), 4, size(q, 2))
        b = m.cores[j+1]
        m.cores[j+1] = reshape(f.R * reshape(b, size(b, 1), :), size(q, 2), 4, size(b, 3))
    elseif direction == :left && j > 1
        f = qr(reshape(a, size(a, 1), 4*size(a, 3))')
        q = Matrix(f.Q)
        m.cores[j] = reshape(q', size(q, 2), 4, size(a, 3))
        b = m.cores[j-1]
        m.cores[j-1] = reshape(reshape(b, :, size(b, 3)) * f.R', size(b, 1), 4, size(q, 2))
    end
    (discarded=0.0, rank_deficient=deficient)
end

"""Solve the two-site version of paper Eq. (4), then truncate and normalize.

In a real Pauli basis its normal equation is the least-squares problem
min_theta ||L theta R - c_window||^2. SVD pseudoinverses avoid squaring
the condition number; discarded directions are reported, not silently hidden.
"""
function update_pair!(m, j, interval, target; maxbond, rtol, direction)
    left, right = local_frames(m, j, interval)
    il, ir, deficient = pseudoinverses(left, right, rtol)
    c = reshape(target, size(left, 1), 16, size(right, 2))
    theta = zeros(size(left, 2), 4, 4, size(right, 1))
    t = reshape(theta, size(left, 2), 16, size(right, 1))
    for p in 1:16
        t[:, p, :] = il * c[:, p, :] * ir
    end
    f = svd(reshape(theta, size(theta, 1)*4, :); full=false)
    rank = min(maxbond, max(1, count(>(rtol * maximum(f.S)), f.S)))
    discarded = sum(abs2, f.S[rank+1:end]) / max(sum(abs2, f.S), eps())
    if direction == :right
        m.cores[j] = reshape(f.U[:, 1:rank], size(theta, 1), 4, rank)
        m.cores[j+1] = reshape(Diagonal(f.S[1:rank]) * f.Vt[1:rank, :], rank, 4, size(theta, 4))
    else
        m.cores[j] = reshape(f.U[:, 1:rank] * Diagonal(f.S[1:rank]), size(theta, 1), 4, rank)
        m.cores[j+1] = reshape(f.Vt[1:rank, :], rank, 4, size(theta, 4))
    end
    normtrace = local_coefficients(m, j:j)[1]
    isfinite(normtrace) && abs(normtrace) > 1e-12 ||
        throw(ArgumentError("Update produced a zero/nonfinite trace"))
    m.cores[direction == :right ? j+1 : j] ./= normtrace
    (discarded=discarded, rank_deficient=deficient)
end

"""Learn from local training marginals only; no reference state or test data is used.

Starts at the maximally mixed product state and uses a fixed number of
left/right sweeps. The final iterate is returned, avoiding test-set selection.

`update=:two_site` optimizes neighboring pairs and truncates each pair to `maxbond`.
`update=:one_site` follows paper Eq. (4): the first `warmup` sweeps are two-site, to
grow the bonds from the product-state start, and the remaining sweeps update one
tensor at a time at fixed bond dimension, with no truncation. With the paper's cap
maxbond <= 4^ell, ell = 0 gives a product-state model.
"""
function learn_mpo(marginals, n; ell=2, maxbond=4, sweeps=20, rtol=1e-10, update=:one_site, warmup=1)
    ell >= 0 && 1 <= maxbond <= 4^ell && sweeps >= 1 && 0 < rtol < 1 ||
        throw(ArgumentError("Require ell>=0, 1<=maxbond<=4^ell, sweeps>=1, 0<rtol<1"))
    update in (:two_site, :one_site) || throw(ArgumentError("update must be :two_site or :one_site"))
    pairs = learning_windows(n, ell; update=:two_site)
    sites = update == :one_site ? learning_windows(n, ell; update) : pairs
    for w in unique(vcat(update == :one_site && warmup > 0 ? pairs : UnitRange{Int}[], sites))
        c = get(marginals, w, nothing)
        !isnothing(c) && length(c) == 4^length(w) && all(isfinite, c) && isapprox(c[1], 1; atol=1e-8) ||
            throw(ArgumentError("Missing or invalid training marginal for $w"))
    end
    m = identity_mpo(n)
    history = NamedTuple[]
    for sweep in 1:sweeps
        discarded, deficient = 0.0, 0
        if update == :two_site || sweep <= warmup
            for (direction, js) in ((:right, 1:n-1), (:left, n-1:-1:1)), j in js
                d = update_pair!(m, j, pairs[j], marginals[pairs[j]]; maxbond, rtol, direction)
                discarded = max(discarded, d.discarded)
                deficient += d.rank_deficient
            end
        else
            for (direction, js) in ((:right, 1:n-1), (:left, n:-1:2)), j in js
                deficient += update_site!(m, j, sites[j], marginals[sites[j]]; rtol, direction).rank_deficient
            end
        end
        loss = mean(sum(abs2, local_coefficients(m, w) - marginals[w]) / 2^length(w) for w in sites)
        push!(history, (; sweep, local_loss=loss, max_discarded_weight=discarded,
                         rank_deficient_updates=deficient, purity=mpo_overlap(m, m)))
    end
    (; model=m, history)
end

function split_settings(group::MeasurementGroup; seed=20260921, train_fraction=0.5)
    0 < train_fraction < 1 && group.NU >= 4 || throw(ArgumentError("Invalid split"))
    ids = randperm(MersenneTwister(seed), group.NU)
    cut = clamp(floor(Int, train_fraction * group.NU), 2, group.NU-2)
    train_ids, test_ids = ids[1:cut], ids[cut+1:end]
    (; train=MeasurementGroup(group.measurements[train_ids]),
       test=MeasurementGroup(group.measurements[test_ids]), train_ids, test_ids)
end

function histogram(data, interval)
    w = length(interval)
    counts = zeros(2^w)
    for shot in axes(data.measurement_results, 1)
        index = 1
        for (k, j) in enumerate(interval)
            b = data.measurement_results[shot, j]
            b in (1, 2) || throw(ArgumentError("RandomMeas outcomes must be 1/2"))
            index += (b-1) << (k-1)
        end
        counts[index] += 1
    end
    counts / data.NM
end

function setting_matrices(data, interval)
    setting = data.measurement_setting
    [Array(setting.basis_transformation[i], setting.site_indices[i]', setting.site_indices[i]) for i in interval]
end

function shadow_coefficients(probabilities, unitaries)
    w = length(unitaries)
    x = reshape(probabilities, fill(2, w)...)
    for j in 1:w
        z = unitaries[j]' * PAULIS[4] * unitaries[j]
        axis = [real(tr(PAULIS[p] * z))/2 for p in 2:4]
        transform = vcat(ones(1, 2), hcat(3axis, -3axis))
        x = mode_product(x, transform, j)
    end
    vec(x)
end

function setting_purity(probabilities, shots)
    shots > 1 || throw(ArgumentError("Purity correction requires at least two shots"))
    w = trailing_zeros(length(probabilities))
    x = reshape(probabilities, fill(2, w)...)
    for j in 1:w
        x = mode_product(x, [2.0 -1; -1 2], j)
    end
    (shots * dot(probabilities, vec(x)) - 2^w) / (shots-1)
end

"""Per-setting shadow coefficients and unbiased same-setting purity estimates.

Optional prior_coefficients applies the CRM control variate of Appendix F:
shadow(data) - E_shots[shadow(prior)|basis] + prior. Purities remain raw.
No calibration or positivity projection is applied.
"""
function shadow_statistics(group::MeasurementGroup, interval::UnitRange{Int}; prior_coefficients=nothing)
    1 <= first(interval) <= last(interval) <= group.N || throw(ArgumentError("Invalid interval"))
    length(interval) <= 8 || throw(ArgumentError("Local dense shadows limited to eight qubits"))
    coefficients = Matrix{Float64}(undef, 4^length(interval), group.NU)
    purities = zeros(group.NU)
    prior = isnothing(prior_coefficients) ? nothing : operator_from_coefficients(prior_coefficients)
    for r in 1:group.NU
        data = group.measurements[r]
        p = histogram(data, interval)
        u = setting_matrices(data, interval)
        c = shadow_coefficients(p, u)
        if !isnothing(prior)
            rotation = reduce(kron, reverse(u))
            expected = real.(diag(rotation * prior * rotation'))
            c .+= prior_coefficients .- shadow_coefficients(expected, u)
        end
        coefficients[:, r] = c
        purities[r] = setting_purity(p, data.NM)
    end
    (; coefficients, purities)
end

"Pauli coefficients of a CRM prior on window `w`; `prior` may also be a function of the window."
prior_coefficients(prior, w) = isnothing(prior) ? nothing : prior isa PauliMPO ? local_coefficients(prior, w) :
                               prior isa Function ? prior(w) : exact_coefficients(prior, w)

"""Mean of the same-setting purity estimates of window `w` (unbiased for tr(rho_w^2))."""
window_purity(group::MeasurementGroup, w) = mean(setting_purity(histogram(d, w), d.NM) for d in group.measurements)

"""CRM prior of the paper's experiment (supplement Eq. (110)): on each window, the reduced
ideal state with a local depolarizing strength fitted so that its purity matches the
purity measured in `group`. Returns a function of the window, for `prior=`.
"""
function fitted_prior(ideal::PauliMPO, group::MeasurementGroup)
    cache = Dict{UnitRange{Int},Vector{Float64}}()
    w -> get!(cache, w) do
        c = local_coefficients(ideal, w)
        weight = [count(!=(0), digits(a - 1; base=4, pad=length(w))) for a in eachindex(c)]
        purity(p) = sum(abs2.(c) .* (1 - p) .^ (2 .* weight)) / 2^length(w)
        target = clamp(window_purity(group, w), purity(1.0), purity(0.0))
        lo, hi = 0.0, 1.0
        for _ in 1:60
            mid = (lo + hi) / 2
            purity(mid) > target ? (lo = mid) : (hi = mid)
        end
        c .* (1 - (lo + hi) / 2) .^ weight
    end
end

function training_marginals(group; ell=2, prior=nothing, update=:one_site)
    windows = learning_windows(group.N, ell; update)
    update == :one_site && (windows = vcat(learning_windows(group.N, ell; update=:two_site), windows))
    Dict(w => vec(mean(shadow_statistics(group, w; prior_coefficients=prior_coefficients(prior, w)).coefficients; dims=2))
         for w in unique(windows))
end

"""Open-chain AFC blocks: adjacent-block products / interior-block products.

Require equal-size blocks, as in the paper. For only two blocks this is exact.
"""
function afc_terms(n, k)
    k >= 1 && n % k == 0 && n >= 2k || throw(ArgumentError("Require k dividing N and N>=2k"))
    blocks = [i:i+k-1 for i in 1:k:n]
    vcat([(first(blocks[j]):last(blocks[j+1]), 1) for j in 1:length(blocks)-1],
         [(blocks[j], -1) for j in 2:length(blocks)-1])
end

function log_product(values, terms)
    all(isfinite(v) && v > 0 for v in values) || return NaN
    sum(sign * log(v) for (v, (_, sign)) in zip(values, terms))
end

function afc_exact(a::PauliMPO, b::PauliMPO; k=2)
    terms = afc_terms(length(a), k)
    ca = [local_coefficients(a, w) for (w, _) in terms]
    cb = [local_coefficients(b, w) for (w, _) in terms]
    lo = log_product([dot(x,y)/2^length(w) for (x,y,(w,_)) in zip(ca,cb,terms)], terms)
    la = log_product([sum(abs2,x)/2^length(w) for (x,(w,_)) in zip(ca,terms)], terms)
    lb = log_product([sum(abs2,x)/2^length(w) for (x,(w,_)) in zip(cb,terms)], terms)
    (; fidelity=exp(lo-max(la,lb)), purity_a=exp(la), purity_b=exp(lb), overlap=exp(lo))
end

"""Test-set AFC estimate with a delete-one-setting jackknife.

Resample all intervals together to preserve their covariance. Standard errors
condition on the fitted model and exclude AFC systematic error. Invalid local
factors produce NaNs and a diagnostic; estimates are never clipped to [0,1].
"""
function afc_estimate(model::PauliMPO, test::MeasurementGroup; k=2, statistics=nothing)
    length(model) == test.N || throw(ArgumentError("Model and data lengths differ"))
    test.NU >= 3 || throw(ArgumentError("Need at least three testing settings"))
    terms = afc_terms(test.N, k)
    stats = isnothing(statistics) ? Dict(w => shadow_statistics(test,w) for (w,_) in terms) : statistics
    afc_from_statistics(model, terms, stats, test.NU)
end

"""Held-out statistics for every AFC window of the chain.

The windows cover the longest prefix whose length is a multiple of k. The windows
of any shorter such prefix are a subset of these, so the same dictionary serves
`afc_prefix_curve`.
"""
afc_statistics(test::MeasurementGroup, k; prior=nothing) =
    Dict(w => shadow_statistics(test, w; prior_coefficients=prior_coefficients(prior, w))
         for (w, _) in afc_terms(k * (test.N ÷ k), k))

"AFC estimates for the first n qubits of the chain, for each n in `sizes`."
function afc_prefix_curve(model::PauliMPO, statistics, nu::Int; k, sizes)
    [(; n, afc_from_statistics(prefix_mpo(model, n), afc_terms(n, k), statistics, nu)...)
     for n in sizes]
end

function afc_from_statistics(model::PauliMPO, terms, stats, nu::Int)
    purities, overlaps, model_purities = Vector{Float64}[], Vector{Float64}[], Float64[]
    for (w,_) in terms
        c = local_coefficients(model,w)
        push!(purities, stats[w].purities)
        push!(overlaps, vec(c' * stats[w].coefficients) / 2^length(w))
        push!(model_purities, sum(abs2,c) / 2^length(w))
    end
    n = nu
    lm = log_product(model_purities, terms)
    function estimate(exclude=0)
        means(vs) = [exclude == 0 ? mean(v) : (sum(v)-v[exclude])/(n-1) for v in vs]
        lp = log_product(means(purities), terms)
        lo = log_product(means(overlaps), terms)
        [exp(lo-max(lp,lm)), -lp/log(2)]
    end
    value = estimate()
    loo = reduce(hcat, [estimate(r) for r in 1:n])
    valid = all(isfinite,value) && all(isfinite,loo)
    errors = valid ? sqrt.((n-1)/n .* vec(sum(abs2, loo .- mean(loo; dims=2); dims=2))) : [NaN,NaN]
    (; fidelity=value[1], fidelity_sem=errors[1], entropy=value[2], entropy_sem=errors[2],
       valid, diagnostic=valid ? "conditional sampling errors only" : "nonpositive/nonfinite AFC factor; increase data or reduce k")
end

end
