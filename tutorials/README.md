# Tutorials content

This folder contains the content for our tutorials, which appear on [IBM
Quantum Learning](https://learning.quantum.ibm.com/catalog/tutorials).

## Editing tutorials

Each tutorial has its own folder in `tutorials/`. Within that folder is the
content notebook (ending in `.ipynb`) and an optional `images` folder. These
are linked to the learning platform through the `learning-api.conf.yaml` file,
which also contains the tutorials' metadata.

Once your changes are in `main`, follow the steps in "Deploy tutorials" to
publish them.

> [!Warning]
>
> ### Gotcha: Top-level headings
>
> The learning platform ignores the top-level heading of the notebook. These
> headings are only included in the notebook for writers' convenience. If you
> want to change the title of a notebook, edit the title in
> `tutorials/learning-api.conf.yaml`.

## Add a new tutorial

To create a new tutorial, add a new notebook to the `tutorials/` folder and
make a new entry in `learning-api.conf.yaml`. When you're ready to publish,
merge to main and follow the steps in "Deploy tutorials".

The next time the deploy action is run, the tutorial will be created on the
platform, so make sure to only merge the change to `main` when you're ready for
the tutorial to go live.

## Deploy tutorials

Once your changes are in `main`, you can deploy them by running the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow. This will push **all** notebooks and their metadata from the main
branch to the environment you select.

Start by deploying to "Learning platform (staging)" and check that your
tutorial renders properly. Ask a teammate for the staging link if you need it.

Once you are happy with staging, rerun the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow, but this time choose "Learning platform (production)".

After deploying to production, check https://learning.quantum.ibm.com/catalog/tutorials
to ensure your tutorial is working correctly.
