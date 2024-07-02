# Upload to IBM Quantum Learning

This script uploads lessons to [IBM Quantum
Learning](learning.quantum.ibm.com).

Lessons to be uploaded must be a directory containing a single notebook and any
images it uses (the API can't handle image attachments inside the notebooks).

```sh
# Example
lesson-root
├── index.ipynb
└── images
    └── image-1.png
```

To sync your lessons automatically with the API, you'll need to add a
`learning-platform.conf.yaml` to the root of your content folder.

```yaml
# learning-api.conf.yaml
# This goes in the root of your content folder
lessons:
  - path: path/to/folder # path to folder containing the lesson
    # Lesson URLs in the API:
    urlStaging: tutorials/4e85c04a-c2fb-4bfc-9077-b75bf1b73a25
    urlProduction: tutorials/5026731b-5e7b-4585-8cf2-f24482819e21
```

To upload lessons using our script:

1. Install the package
   ```bash
   pip install git+https://github.com/Qiskit/documentation.git#subdirectory=scripts/ibm-quantum-learning-uploader
   ```
2. Run this from the root of your content folder:

   ```bash
   sync-lessons
   ```

   You'll be prompted for your username and password.

You can also upload just one lesson at a time using

```bash
sync-lessons path/to/folder
```

To use this script as part of CI (Travis / GitHub actions), set the
`LEARNING_API_TOKEN` environment variable to your access token before running
the script, and `LEARNING_API_ENVIRONMENT` to the name of the API (`staging` or
`production`). You should also pin the package to a specific commit, like so:

```bash
pip install git+https://github.com/Qiskit/documentation.git@<commit-hash>#subdirectory=scripts/ibm-quantum-learning-uploader
```
