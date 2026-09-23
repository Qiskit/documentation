# This code is part of Qiskit.
#
# (C) Copyright IBM 2026.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at https://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

# =============================================================================
# Nuclear Subspace Diagonalization Application
#
# Builds nuclear_shell_lib (physics + ansatz + driver modules) and
# nuclear_shell_driver executable.
# nuclear_shell_parallel is built only when coarray support is detected.
# =============================================================================

# Adapted for standalone use in Qiskit/documentation on 23 September 2026.
# The upstream applications/CMakeLists.txt supplies this dependency setup.
cmake_minimum_required(VERSION 3.20)
project(nuclear_shell_companion LANGUAGES Fortran)

set(QISKIT_FORTRAN_ROOT "" CACHE PATH "Path to the qiskit-fortran build directory")
set(QISKIT_ROOT "" CACHE PATH "Path to the Qiskit repository with dist/c")
set(QISKIT_RUNTIME_ROOT "" CACHE PATH "Optional qiskit-ibm-runtime-c repository")
foreach(required_root QISKIT_FORTRAN_ROOT QISKIT_ROOT)
    if("${${required_root}}" STREQUAL "")
        message(FATAL_ERROR "Set -D${required_root}=/absolute/path/to/dependency")
    endif()
endforeach()
find_library(QISKIT_FORTRAN_LIB NAMES qiskit-fortran
    HINTS "${QISKIT_FORTRAN_ROOT}" NO_DEFAULT_PATH REQUIRED)
find_library(QISKIT_LIB NAMES qiskit qiskit_cext
    HINTS "${QISKIT_ROOT}/dist/c/lib" "${QISKIT_ROOT}/target/release"
    NO_DEFAULT_PATH REQUIRED)
if(NOT IS_DIRECTORY "${QISKIT_FORTRAN_ROOT}/modules")
    message(FATAL_ERROR "Build qiskit-fortran first: its modules directory is missing")
endif()
add_library(qiskit-fortran STATIC IMPORTED)
set_target_properties(qiskit-fortran PROPERTIES
    IMPORTED_LOCATION "${QISKIT_FORTRAN_LIB}"
    INTERFACE_LINK_LIBRARIES "${QISKIT_LIB}"
    INTERFACE_INCLUDE_DIRECTORIES "${QISKIT_FORTRAN_ROOT}/modules")
include_directories("${QISKIT_FORTRAN_ROOT}/modules")
file(MAKE_DIRECTORY "${CMAKE_BINARY_DIR}/modules")
get_filename_component(_qiskit_lib_path "${QISKIT_LIB}" DIRECTORY)
list(APPEND CMAKE_BUILD_RPATH "${_qiskit_lib_path}")

# Find LAPACK for exact_solver.f90 (dsyev routine)
# On macOS, use Accelerate framework; on other systems, find LAPACK
if(APPLE)
    # Use LINKER: prefix to pass framework flag directly to linker
    set(LAPACK_LIBRARIES "LINKER:-framework,Accelerate")
    message(STATUS "Using Accelerate framework for LAPACK: ${LAPACK_LIBRARIES}")
else()
    find_package(LAPACK REQUIRED)
    message(STATUS "Using LAPACK libraries: ${LAPACK_LIBRARIES}")
endif()

# Find OpenMP for parallel Hamiltonian build (Hamiltonian inner loop).
# CMake's FindOpenMP does not auto-detect flang's flags on macOS; we probe manually.
find_package(OpenMP)
if(NOT OpenMP_Fortran_FOUND)
    # Homebrew flang requires -fopenmp + explicit libomp path
    set(_LIBOMP_HINT "/opt/homebrew/opt/libomp/lib")
    find_library(_LIBOMP_LIB NAMES omp HINTS "${_LIBOMP_HINT}" NO_DEFAULT_PATH)
    if(_LIBOMP_LIB)
        set(FLANG_OPENMP_FLAGS "-fopenmp")
        set(FLANG_OPENMP_LIBS  "-L${_LIBOMP_HINT}" "${_LIBOMP_LIB}")
        set(OpenMP_Fortran_FOUND TRUE)
        message(STATUS "Flang OpenMP: ${_LIBOMP_LIB}  -  parallel Hamiltonian build enabled")
    else()
        message(STATUS "OpenMP not found  -  Hamiltonian build will be serial")
    endif()
else()
    message(STATUS "OpenMP found (CMake)  -  parallel Hamiltonian build enabled")
endif()

# Find runtime library (optional, for nuclear_shell_driver)
if(NOT QISKIT_RUNTIME_ROOT STREQUAL "")
    find_library(QISKIT_RUNTIME_LIB
        NAMES qiskit_ibm_runtime
        HINTS "${QISKIT_RUNTIME_ROOT}/build/cargo/release"
              "${QISKIT_RUNTIME_ROOT}/build/cargo/debug"
        NO_DEFAULT_PATH)
    if(QISKIT_RUNTIME_LIB)
        message(STATUS "Runtime lib (nuclear_shell) : ${QISKIT_RUNTIME_LIB}")
    else()
        message(STATUS "Runtime lib not found in ${QISKIT_RUNTIME_ROOT}")
    endif()
endif()

# Find GSL (GNU Scientific Library) for Clebsch-Gordan coefficients (optional)
find_package(GSL)
if(GSL_FOUND)
    message(STATUS "GSL found - version ${GSL_VERSION}")
    message(STATUS "GSL libraries: ${GSL_LIBRARIES}")
else()
    message(STATUS "GSL not found - building without GSL support (optional)")
endif()

# Setup RPATH for executables (conda lib + qiskit libs)
get_filename_component(_qiskit_lib_dir "${CMAKE_BINARY_DIR}" DIRECTORY)
if(DEFINED ENV{CONDA_PREFIX})
    set(_python_lib_dir "$ENV{CONDA_PREFIX}/lib")
    message(STATUS "Python lib dir (conda): ${_python_lib_dir}")
else()
    find_package(Python3 COMPONENTS Interpreter QUIET)
    if(Python3_FOUND)
        execute_process(
            COMMAND "${Python3_EXECUTABLE}" -c
                "import sys, os; print(os.path.join(sys.prefix, 'lib'))"
            OUTPUT_VARIABLE _python_lib_dir
            OUTPUT_STRIP_TRAILING_WHITESPACE
            ERROR_QUIET)
        message(STATUS "Python lib dir (system): ${_python_lib_dir}")
    endif()
endif()

# Build RPATH: conda lib + qiskit lib dirs
set(_rpath "${_python_lib_dir}")
if(CMAKE_BUILD_RPATH)
    set(_rpath "${_rpath};${CMAKE_BUILD_RPATH}")
endif()
set(CMAKE_BUILD_RPATH "${_rpath}")
set(CMAKE_INSTALL_RPATH "${_rpath}")

# ---------------------------------------------------------------------------
# Fortran preprocessing
# ---------------------------------------------------------------------------
# Sources use #ifdef (USE_GSL, USE_RUNTIME) but are lowercase .f90, which
# neither gfortran nor flang preprocesses by default: gfortran warns and
# compiles both branches, flang silently takes #else, as it sits after
# add_subdirectory(nuclear_shell) and behind an early return().
if(CMAKE_Fortran_COMPILER_ID MATCHES "GNU|Flang")
    set(_fpp_flag -cpp)
elseif(CMAKE_Fortran_COMPILER_ID MATCHES "Intel|NVHPC|PGI")
    set(_fpp_flag -fpp)
else()
    set(_fpp_flag "")
    message(WARNING
        "Unrecognised Fortran compiler '${CMAKE_Fortran_COMPILER_ID}': cannot "
        "enable the C preprocessor.  USE_GSL and USE_RUNTIME will be ignored.")
endif()

# ---------------------------------------------------------------------------
# IBM Runtime module availability
# ---------------------------------------------------------------------------
# The driver's --runtime path needs qiskit_runtime.mod, which qiskit-fortran
# only builds under -DQISKIT_FORTRAN_RUNTIME=ON, and the runtime library, which
# the imported qiskit-fortran target does not re-export.  Require both, so a
# half-configured tree degrades to a working no-runtime build instead of
# failing at compile time (missing .mod) or link time (undefined symbols).
set(_have_runtime_mod OFF)
if(EXISTS "${QISKIT_FORTRAN_ROOT}/modules/qiskit_runtime.mod" AND QISKIT_RUNTIME_LIB)
    set(_have_runtime_mod ON)
    message(STATUS "qiskit_runtime module + library found  -  --runtime mode enabled")
else()
    if(NOT EXISTS "${QISKIT_FORTRAN_ROOT}/modules/qiskit_runtime.mod")
        message(STATUS
            "qiskit_runtime.mod not found under ${QISKIT_FORTRAN_ROOT}/modules "
            "(rebuild qiskit-fortran with -DQISKIT_FORTRAN_RUNTIME=ON to get it)")
    endif()
    if(NOT QISKIT_RUNTIME_LIB)
        message(STATUS
            "libqiskit_ibm_runtime not found (pass -DQISKIT_RUNTIME_ROOT=... to get it)")
    endif()
    message(STATUS
        "Building nuclear_shell_driver without --runtime support  -  test mode and "
        "--bitstrings-dir path are unaffected")
endif()

# Single unified library: nuclear_shell_lib
# Contains all physics modules, ansatz, and driver
add_library(nuclear_shell_lib
    physics/usdb_reader.f90
    physics/orbital_registry.f90
    physics/clebsch_gordan.f90
    physics/gsl_interface.f90
    physics/exact_solver.f90
    physics/symmetry_filter.f90
    circuit/nuclear_ansatz.f90
    nuclear_pool.f90
    nuclear_selection.f90
    nuclear_gates.f90
    circuit/nuclear_shell_driver.f90
)

set_target_properties(nuclear_shell_lib PROPERTIES
    Fortran_MODULE_DIRECTORY ${CMAKE_BINARY_DIR}/modules
)

target_include_directories(nuclear_shell_lib PRIVATE
    ${CMAKE_BINARY_DIR}/modules
)

target_compile_options(nuclear_shell_lib PRIVATE
    $<$<COMPILE_LANGUAGE:Fortran>:${_fpp_flag}>
)

if(_have_runtime_mod)
    target_compile_definitions(nuclear_shell_lib PRIVATE USE_RUNTIME)
endif()

target_link_libraries(nuclear_shell_lib PRIVATE
    qiskit-fortran
    ${LAPACK_LIBRARIES}
)

# Add OpenMP support if available (parallel Hamiltonian build)
if(OpenMP_Fortran_FOUND)
    if(TARGET OpenMP::OpenMP_Fortran)
        target_link_libraries(nuclear_shell_lib PRIVATE OpenMP::OpenMP_Fortran)
        target_compile_options(nuclear_shell_lib PRIVATE ${OpenMP_Fortran_FLAGS})
    elseif(DEFINED FLANG_OPENMP_FLAGS)
        target_compile_options(nuclear_shell_lib PRIVATE ${FLANG_OPENMP_FLAGS})
        target_link_libraries(nuclear_shell_lib PRIVATE ${FLANG_OPENMP_LIBS})
    endif()
endif()

# Add GSL support if available
if(GSL_FOUND)
    target_compile_definitions(nuclear_shell_lib PRIVATE USE_GSL)
    target_include_directories(nuclear_shell_lib PRIVATE ${GSL_INCLUDE_DIRS})
    if(TARGET GSL::gsl)
        target_link_libraries(nuclear_shell_lib PRIVATE GSL::gsl GSL::gslcblas)
    else()
        target_link_libraries(nuclear_shell_lib PRIVATE ${GSL_LIBRARIES})
    endif()
endif()

# Build nuclear_shell_driver executable (with runtime support)
add_executable(nuclear_shell_driver
    circuit/nuclear_shell_driver.f90
)

target_link_libraries(nuclear_shell_driver
    nuclear_shell_lib
)

if(QISKIT_RUNTIME_LIB)
    target_link_libraries(nuclear_shell_driver
        "${QISKIT_RUNTIME_LIB}"
    )
    get_filename_component(_runtime_lib_dir "${QISKIT_RUNTIME_LIB}" DIRECTORY)
    set(CMAKE_BUILD_RPATH "${CMAKE_BUILD_RPATH};${_runtime_lib_dir}")
    set(CMAKE_INSTALL_RPATH "${CMAKE_INSTALL_RPATH};${_runtime_lib_dir}")
endif()

target_include_directories(nuclear_shell_driver PRIVATE
    ${CMAKE_BINARY_DIR}/modules
)

# The driver source is compiled a second time here, so it needs the same
# preprocessor flag and macros as the copy inside nuclear_shell_lib.
target_compile_options(nuclear_shell_driver PRIVATE
    $<$<COMPILE_LANGUAGE:Fortran>:${_fpp_flag}>
)

if(_have_runtime_mod)
    target_compile_definitions(nuclear_shell_driver PRIVATE USE_RUNTIME)
endif()

if(CMAKE_BUILD_RPATH)
    set_target_properties(nuclear_shell_driver PROPERTIES
        BUILD_RPATH "${CMAKE_BUILD_RPATH}"
        INSTALL_RPATH "${CMAKE_INSTALL_RPATH}"
        BUILD_WITH_INSTALL_RPATH OFF)
endif()

# ---------------------------------------------------------------------------
# Coarray detection
# ---------------------------------------------------------------------------
# CMake defines no CMAKE_Fortran_COMPILER_SUPPORTS_F2008_COARRAYS variable (only
# ..._SUPPORTS_F90), so testing it always skipped nuclear_shell_parallel, even
# under gfortran.  Probe by compiling and linking a real coarray program.
include(CheckFortranSourceCompiles)
set(_coarray_flag "")
set(_coarray_libs "")
if(CMAKE_Fortran_COMPILER_ID MATCHES "GNU")
    set(_coarray_flag "-fcoarray=lib")
    # libcaf_single ships with gfortran; ask the compiler where it is.
    execute_process(
        COMMAND "${CMAKE_Fortran_COMPILER}" -print-file-name=libcaf_single.a
        OUTPUT_VARIABLE _caf_lib OUTPUT_STRIP_TRAILING_WHITESPACE ERROR_QUIET)
    if(_caf_lib AND EXISTS "${_caf_lib}")
        set(_coarray_libs "${_caf_lib}")
    endif()
endif()
set(CMAKE_REQUIRED_FLAGS "${_coarray_flag}")
set(CMAKE_REQUIRED_LIBRARIES "${_coarray_libs}")
check_fortran_source_compiles("
program probe
  integer :: a[*]
  a = this_image()
  sync all
end program
" NUCLEAR_SHELL_HAVE_COARRAYS SRC_EXT f90)
unset(CMAKE_REQUIRED_FLAGS)
unset(CMAKE_REQUIRED_LIBRARIES)

# Build nuclear_shell_parallel executable (requires coarray support).
# Each coarray image processes a disjoint partition of per-circuit bitstring
# files for the classical post-processing (filter -> Hamiltonian -> diag).
if(NUCLEAR_SHELL_HAVE_COARRAYS)
    message(STATUS "Coarray support detected  -  building nuclear_shell_parallel")
    add_executable(nuclear_shell_parallel
        circuit/nuclear_shell_parallel.f90
    )

    target_link_libraries(nuclear_shell_parallel
        nuclear_shell_lib
    )

    target_include_directories(nuclear_shell_parallel PRIVATE
        ${CMAKE_BINARY_DIR}/modules
    )

    target_compile_options(nuclear_shell_parallel PRIVATE
        $<$<COMPILE_LANGUAGE:Fortran>:${_fpp_flag}>
        $<$<COMPILE_LANGUAGE:Fortran>:${_coarray_flag}>
    )

    if(_coarray_libs)
        target_link_libraries(nuclear_shell_parallel ${_coarray_libs})
    endif()
    target_link_options(nuclear_shell_parallel PRIVATE ${_coarray_flag})

    if(CMAKE_BUILD_RPATH)
        set_target_properties(nuclear_shell_parallel PROPERTIES
            BUILD_RPATH "${CMAKE_BUILD_RPATH}"
            INSTALL_RPATH "${CMAKE_INSTALL_RPATH}"
            BUILD_WITH_INSTALL_RPATH OFF)
    endif()
else()
    message(STATUS "Coarray support not detected  -  skipping nuclear_shell_parallel")
endif()

# Make USDB.snt available beside the driver in the build tree.
configure_file(${CMAKE_CURRENT_SOURCE_DIR}/data/USDB.snt
               ${CMAKE_CURRENT_BINARY_DIR}/USDB.snt
               COPYONLY)

# Installation
install(TARGETS nuclear_shell_driver
    RUNTIME DESTINATION bin
)
# Regression coverage for interaction conventions, independent of QPU access.
include(CTest)
if(BUILD_TESTING)
    add_executable(hamiltonian_regression tests/hamiltonian_regression.f90)
    target_link_libraries(hamiltonian_regression PRIVATE nuclear_shell_lib)
    target_include_directories(hamiltonian_regression PRIVATE ${CMAKE_BINARY_DIR}/modules)
    add_test(NAME nuclear_hamiltonian_regression
        COMMAND hamiltonian_regression ${CMAKE_CURRENT_SOURCE_DIR}/data/USDB.snt)
    set_tests_properties(nuclear_hamiltonian_regression PROPERTIES ENVIRONMENT "OMP_NUM_THREADS=4")
endif()
