# Contributing

## Before you start

If you are new to contributing to this project, start by reading/reviewing the following:

- [Code of Conduct](/CODE_OF_CONDUCT.md)
- [Guidance for generative AI use](#use-of-generative-ai)
- [README](./README.md), [Style guide](./style-guide.md), and [Guide to writing in mdx format](./mdx-guide.md)

## Choose an issue to work on

Qiskit/documentation uses the following labels to help non-maintainers find issues best suited to their interests and experience level. Issues with these labels are already approved by our maintaining team for delegation to outside contributors.

- [good first issue](https://github.com/Qiskit/documentation/pulls?q=is%3Apr+state%3Aopen+label%3A%22good+first+issue+%F0%9F%90%A3%22) - these issues are typically the simplest available to work on, ideal for newcomers.
- [help wanted](https://github.com/Qiskit/documentation/pulls?q=is%3Apr+state%3Aopen+label%3A%22help+wanted%22) - these issues are generally more complex than good first issues. These are a great option for experienced contributors looking for something a bit more challenging.

## Indicate interest and open a PR if assigned

1. Find an issue with one of the labels indicated above. **Note that if an issue does not have one of those labels and you request to work on it, it may take longer for us to respond to your request, since we have not gotten internal pre-approval to delegate that work.**

2. Add a comment on the issue that indicates you are interested in working on it.

3. A maintainer will review your request.

4. If a maintainer assigns you to the issue, you can begin working on it.

5. **Note that if you begin working on a PR before the relevant issue is assigned to you, a maintainer might close the issue.**

6. Any PR you open will automatically ping the maintainers once it is no longer in draft status. _Please do not ping maintainers unnecessarily._

7. Refer to the [README](./README.md), [style guide](./style-guide.md), and guide to [writing in mdx format](./mdx-guide.md) to be sure your contribution conforms to this repository's requirements.

## Use of generative AI

> [!NOTE]
> By "generative AI", we mean tools like large language models (LLMs).

All interactions must be driven by a human.
It is forbidden to allow an agent to post any content autonomously to the Qiskit/documentation repository, whether
code, PRs, issues, or comments.

You are responsible for the suitability, understanding, and explanation of any code you submit to
Qiskit/documentation, no matter how it was produced.

Qiskit/documentation maintainers may close any pull request if the review effort is expected to outweigh the
benefit to the project, even with no proposed alternative. This is a subjective decision made by
maintainers, and does not require proof of generative AI use.

### Your responsibilities

Your responsibilities for your code are not changed by using generative AI tooling. These include,
without being exhaustive:

- You must submit the pull request and drive all communications. It is not acceptable to allow an agent to publicly interact autonomously with the Qiskit/documentation repository.

- You have fully reviewed and understood all code you submit, and can explain the reasoning for it. Using an LLM to generate the explanation is not acceptable.

- Your use of the tool, or the use of the output in Qiskit, does not violate any third-party license obligations of source code used during the generation, or the terms and conditions of the tool. This may mean including license notices or source attribution with the generated code.

- You assert that your submission is your own original work of authorship, as required by the [Contributor License Agreement (CLA)](https://qisk.it/cla) that you signed (or will sign) on your first contribution to Qiskit.

**Any use of generative tooling to produce code or public communications (for example, comments or
pull-request descriptions) must be disclosed in the pull-request description.**

### Appropriate use of AI tools

AI tools can be used to assist contributions, but this must not be done at the expense of maintainers. Any contribution must be more valuable than the maintainer time required to review
it and its architectural decisions.

As a rule of thumb: to be a useful contributor, you as a human should have put in at least as much effort as is required for review.

If you, as a human, have not added value to the contribution beyond prompting an LLM, the contribution is not valuable to the project and will be rejected.

LLM-generated code and prose tends to be over verbose, which transfers a lot of work to maintainers. You must make an effort to ensure all submissions are as simple and concise as possible.

Generative-AI tooling _must not_ be used for any content generation on issues labeled "good first issue". These issues are expected to be simple, non-critical, and for newcomers to learn the process of contribution.

We recommend that you _do not_ use generative-language tooling to assist in producing PR descriptions or explanations in comments, but do not forbid it. Writing the explanations yourself forces you to prove you understand the contribution at the level required for submission. Imperfect human words are more valuable than LLM output, even if English is not your native language.

### Further reading

This policy was informed by other projects' policies. These links are to policies that further
explain the same spirit as Qiskit's policy, as of 2026-08-18:

- [LLVM AI Tool Use Policy](https://llvm.org/docs/AIToolPolicy.html)
- [NumPy AI policy](https://numpy.org/devdocs/dev/ai_policy.html)
- [Scientific Python Community Considerations around AI](https://blog.scientific-python.org/scientific-python/community-considerations-around-ai/)

You can consult these documents for more explanations on what constitutes a "useful" contribution,
what the concerns around generative-AI tooling are from a maintainer's perspective, and some
recommendations for using generative tooling effectively.

## Contributor Licensing Agreement

Before you can submit any code, all contributors must sign a
contributor license agreement (CLA). By signing a CLA, you're attesting
that you are the author of the contribution, and that you're freely
contributing it under the terms of the Apache-2.0 license.

When you contribute to the Qiskit/documentation project with a new pull request,
a bot will evaluate whether you have signed the CLA. If required, the
bot will comment on the pull request, including a link to accept the
agreement. The [individual CLA](https://qisk.it/cla)
document is available for review as a PDF.

Note: If your contribution is part of your employment or your contribution
is the property of your employer, then you will more than likely need to sign a
[corporate CLA](https://qisk.it/corporate-cla) too and
email it to us at <qiskit@us.ibm.com>.
