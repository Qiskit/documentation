# Contributing

## Contents
* [Before you start](#before-you-start)
* [Choose an issue to work on](#Choose-an-issue-to-work-on)
* [Issues and pull requests](#issues-and-pull-requests)
  * [Pull request author checklist](#pull-request-author-checklist)
  * [Use of generative AI](#use-of-generative-ai)
  * [Code review](#code-review)
  * [Pull request merging checking](#pull-request-merging-checklist)
* [Contributor Licensing Agreement](#contributor-licensing-agreement)
* [Changelog generation](#changelog-generation)
* [Release notes](#release-notes)
* [Testing](#testing)
  * [Qiskit's Python test suite](#qiskits-python-test-suite)
  * [Snapshot testing for visualizations](#snapshot-testing-for-visualizations)
  * [Testing Rust components](#testing-rust-components)
    * [Using a custom venv instead of tox](#using-a-custom-venv-instead-of-tox)
    * [Calling Python from Rust tests](#calling-python-from-rust-tests)
* [Style and Lint](#style-and-lint)
* [Building API docs locally](#building-api-docs-locally)
  * [Troubleshooting docs builds](#troubleshooting-docs-builds)
* [Development Cycle](#development-cycle)
  * [Branches](#branches)
  * [Release Cycle](#release-cycle)
* [Adding deprecation warnings](#adding-deprecation-warnings)
* [Using dependencies](#using-dependencies)
  * [Version support policy](#version-support-policy)
  * [Adding a requirement](#adding-a-requirement)
  * [Adding an optional dependency](#adding-an-optional-dependency)
  * [Checking for optionals](#checking-for-optionals)


## Before you start

If you are new to contributing to this project, we recommend you do the following before diving into the code:

* Read the [Code of Conduct](https://github.com/Qiskit/qiskit/blob/main/CODE_OF_CONDUCT.md)

## Choose an issue to work on

Qiskit/documentation uses the following labels to help non-maintainers find issues best suited to their interests and experience level:

* [good first issue](https://github.com/Qiskit/qiskit/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) - these issues are typically the simplest available to work on, ideal for newcomers. They should already be fully scoped, with a clear approach outlined in the descriptions.
* [help wanted](https://github.com/Qiskit/qiskit/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) - these issues are generally more complex than good first issues. They typically cover work that core maintainers don't currently have capacity to implement and may require more investigation/discussion. These are a great option for experienced contributors looking for something a bit more challenging.

## Issues and pull requests

We use [GitHub pull requests](https://help.github.com/articles/about-pull-requests) to accept
contributions.

While not required, opening a new issue about the bug you're fixing or the
feature you're working on before you open a pull request is an important step
in starting a discussion with the community about your work. The issue gives us
a place to talk about the idea and how we can work together to implement it in
the code. It also lets the community know what you're working on, and if you
need help, you can reference the issue when discussing it with other community
and team members.

* For documentation issues relating to pages in the guides, tutorials, and migration guides sections of [quantum.cloud.ibm.com](https://quantum.cloud.ibm.com/docs/), please open an issue in the [Qiskit/documentation repo](https://github.com/Qiskit/documentation/issues/new/choose) rather than the Qiskit/qiskit repo. In other words, any page that DOES NOT have `/api/` in the url should be addressed in the Qiskit/documentation repo.
* For issues relating to API reference pages (any page that contains `/api/` in the url), please open an issue in the repo specific to that API reference, for example [Qiskit/qiskit](https://github.com/Qiskit/qiskit/issues/new/choose), [Qiskit/qiskit-aer](https://github.com/Qiskit/qiskit-aer/issues/new/choose), or [Qiskit/qiskit-ibm-runtime](https://github.com/Qiskit/qiskit-ibm-runtime/issues/new/choose).

Before marking your Pull Request as "ready for review" make sure you have followed the
PR Checklist below. PRs that adhere to this list are more likely to get reviewed and
merged in a timely manner.

### Pull request author checklist

When submitting a pull request and you feel it is ready for review,
please ensure that:

1. The code follows the code style of the project and successfully
   passes the CI tests. For convenience, you can execute `tox` locally,
   which will run these checks and report any issues.

   If your code fails the local style checks (specifically the black
   or Rust code formatting check) you can use `tox -eblack` and
   `cargo fmt` to automatically fix the code formatting.

2. The documentation has been updated accordingly. In particular, if a
   function or class has been modified during the PR, please update the
   *docstring* accordingly.

   If your pull request is adding a new class, function, or module that is
   intended to be user facing ensure that you've also added those to a
   documentation `autosummary` index to include it in the api documentation.

3. If you are of the opinion that the modifications you made warrant additional tests,
   feel free to include them.

4. Ensure that if your change has an end user facing impact (new feature,
   deprecation, removal etc) that you have added a `reno` release note for that
   change and that the PR is tagged for the changelog.

5. All contributors have [signed the CLA](#contributor-licensing-agreement).

   You will need to ensure that all commits in the PR chain have a correctly configured
   email address, and the email address is registered to a GitHub account that has signed
   the CLA.  A bot will leave a comment with a link to sign the CLA.

6. The PR has a concise and explanatory title that can be understood without
   clicking on another GitHub issue.

   The PR title will become the summary line of the commit, which appears in `git log`.
   For example, "Fixes Issue 1234" is a bad title, and "Fix `ApplyLayout` with
   empty layouts" is good.

7. If the PR addresses an open issue the PR description includes the `fixes #issue-number`
   syntax to link the PR to that issue (**you must use the exact phrasing in order for GitHub
   to automatically close the issue when the PR merges**)

8. You have disclosed all substantial use of AI tooling, including large language models (LLMs).
   See [Use of generative AI](#use-of-generative-ai) for your responsibilities.


### Use of generative AI

> [!NOTE]
> By "generative AI", we mean tools like large language models (LLMs).

All interactions must be driven by a human.
It is forbidden to allow an agent to post any content autonomously to the Qiskit/documentation repository, whether
code, PRs, issues, or comments.

You are responsible for the suitability, understanding, and explanation of any code you submit to
Qiskit/documentation, no matter how it was produced.

Qiskit/documentation maintainers may close any pull request if the review effort is expected to outweigh the
benefit to the project, even with no proposed alternative.  This is a subjective decision made by
maintainers, and does not require proof of generative AI use.

#### Your responsibilities

Your responsibilities for your code are not changed by using generative AI tooling.  These include,
without being exhaustive:

- You must submit the pull request and drive all communications.  It is not acceptable to allow an
  agent to publicly interact autonomously with the Qiskit/documentation repository.

- You have fully reviewed and understood all code you submit, and can explain the reasoning for it.
  Using an LLM to generate the explanation is not acceptable.

- Your use of the tool, or the use of the output in Qiskit, does not violate any third-party
  license obligations of source code used during the generation, or the terms and conditions of the
  tool.  This may mean including license notices or source attribution with the generated code.

- You assert that your submission is your own original work of authorship, as required by the
  [Contributor License Agreement (CLA)](https://qisk.it/cla) that you signed (or will sign) on your
  first contribution to Qiskit.

Any use of generative tooling to produce code or public communications (for example, comments or
pull-request descriptions) must be disclosed in the pull-request description, using the template.

#### Appropriate use of AI tools

AI tools can be used to assist contributions, but this must not be done at the expense of
maintainers.  Any contribution must be more valuable than the maintainer time required to review
it and its architectural decisions.

As a rule of thumb: to be a useful contributor, you as a human should have put in at least as much
effort as is required for review.

If you, as a human, have not added value to the contribution beyond prompting an LLM, the
contribution is not valuable to the project and will be rejected.

LLM-generated code and prose tends to be over verbose, which transfers a lot of work to maintainers.
You must make an effort to ensure all submissions are as simple and concise as possible.

Generative-AI tooling *must not* be used for any content generation on issues labelled "good first
issue".  These issues are expected to be simple, non-critical, and for newcomers to learn the
process of contribution.

We recommend that you do not use generative-language tooling to assist in producing PR descriptions
or explanations in comments, but do not forbid it.  Writing the explanations yourself forces you to
prove you understand the contribution at the level required for submission.  Imperfect human words
are more valuable than LLM output, even if English is not your native language.


#### Further reading

This policy was informed by other projects' policies.  These links are to policies that further
explain the same spirit as Qiskit's policy, as of 2026-08-18:

- [LLVM AI Tool Use Policy](https://llvm.org/docs/AIToolPolicy.html)
- [NumPy AI policy](https://numpy.org/devdocs/dev/ai_policy.html)
- [Scientific Python Community Considerations around AI](https://blog.scientific-python.org/scientific-python/community-considerations-around-ai/)

You can consult these documents for more explanations on what constitutes a "useful" contribution,
what the concerns around generative-AI tooling are from a maintainer's perspective, and some
recommendations for using generative tooling effectively.

### Code review

All code merged to Qiskit, even from maintainers, goes through a code-review
process after a pull request is made.  There are a small number of
maintainers who can authorize a final merge, but code review involves everyone
working together to make Qiskit/documentation better.  You can review code even if you
are not a maintainer, which helps make sure pull requests are technically
correct, well tested, and easier to tackle in their final maintainer review.

The code-review process is a normal part of software development, and nothing to
be scared of; for very easy changes it can be as simple as a maintainer saying
"looks good to me!" (or in short, "LGTM!") and merging the PR.  For more complex changes, it's often a
back-and-forth where the reviewer may ask a couple of questions about why things
were done a particular way, and make suggestions for improvement.  You don't
need to do everything suggested if you've got good reasons to disagree, but
communicate that clearly and politely.

Remember that the PR author is a human, not just a username!  It's OK to ask
questions about the code, but don't be mean or rude about it even if you don't
like it.  It's also fine to provide comments that are just compliments with no
suggested changes, if you particularly like something!

### Writing review comments

* Make concrete suggestions when you think something should be changed, but
  remember that the author might have already thought about it and have a
  reason.  Try "What do you think about us raising a `TypeError` here instead of
  returning `None`?", rather than "You should raise an exception here".

* Try to make each round of review thorough.  Don't add one or two comments on
  one file, then come back a day later and add a couple of other unrelated
  comments on a different file, and so on.  Try to review the whole PR
  thoroughly in one go; it's easier to catch bugs like this, and less
  frustrating for the PR creator. If that's too much for you, consider
  asking if the PR could be split into smaller independent chunks.

* Try to keep the number of comments reasonable.  This depends on the size of
  the PR, but remember that there's somebody who'll read all your comments, and
  it can be demoralizing if you get a PR back and it's got 30 comments on from a
  50-line change.  If you feel like you're putting too many comments on,
  consider if you could group several of them into one theme, and ask them as a
  more detailed question with a focus on only one part of the code.  Try not to
  comment the same thing in many places.

* Try to avoid saying "you do" in review comments, and instead try to
  say things like "we do" even when talking about new code. It's not a big
  change, yet it helps to make us think about Qiskit's code as something that we
  all own and care about, and that we're all working together to make it better.

### Pull request merging checklist

When a PR is fully approved by code owners, it can be queued for merge.
Authorised users (those with write access to the repository) will be able to
press the "merge when ready" button.  Before enqueuing for merge, check that the
following PR metadata items are set correctly:

* The "milestone" is set to the expected release version.  For PRs to be
  backported, this should be (for example) "2.3.2".  For PRs for the next minor
  release, it should be (for example) "2.4.0".  If the PR is unrelated to any
  particular release (such as a change only to a test), you can leave this
  blank.

  This metadata lets us quickly jump from `git log` to the PR page, and see
  there which Qiskit release a patch went out in.

* The correct "Changelog: X" label is applied, including "Changelog: None" if
  the PR need not appear.

  These labels are much simpler than the `reno` structure; they are for the
  GitHub "releases" page instead, and categorize PRs into "Added", "Deprecated",
  "Changed" or "Fixed".

* Suitable backport commands have been set, if necessary.

  In most cases, applying the label "stable backport potential" is sufficient.
  In this case, the Mergify bot will open a backport PR to the most recent
  stable branch (for example `stable/2.3` if we are currently preparing for
  2.4.0).  If you need more complex backports, write a GitHub comment of the
  form:

  ```
  @Mergifyio backport <branch> <branch2> ...
  ```

  You can have as many branches as necessary.  It usually only necessary to do
  this to support old major branches.

* Any issues fixed by the PR have their own "Fix #<num>" line in the author's PR
  comment.  If you are empowered to merge PRs, you should be empowered to edit
  the author's comment to add these, if necessary.

* The PR title is clear, concise, and does not link to GitHub issues.

  As a merger, you can edit the title; there is an "edit" button at the top right
  of the PR main page, right of the title.  This title becomes th#e `git` commit
  summary line, so should be understandable without reference to GitHub.

If a PR is backported, the Mergify bot will open a PR for each branch to
backport it to.  Assuming there are no merge conflicts, you can immediately
approve and enqueue those PRs; a GitHub Actions workflow will copy across the
labels (except for "stable backport potential") and milestone.


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


## Style and lint
