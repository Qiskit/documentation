# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

# This Dockerfile is used to preview the docs in pull requests via GitHub Actions.
#
# Keep it aligned with ./start. This Dockerfile is similar,
# other than setting the CLI args directly in the Dockerfile
# because the GitHub Action expects that.
#
# To test it out locally:
#
#   1. ❯ docker build -t qiskit-docs-preview .
#   2. ❯ docker run --rm -p 3000:3000 -t qiskit-docs-preview
#   3. Open up http://localhost:3000

FROM qiskit/documentation

COPY docs/ /home/node/app/docs
COPY translations/ /home/node/app/docs
COPY public /home/node/app/public

EXPOSE 3000 5001
