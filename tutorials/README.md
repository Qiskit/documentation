# Tutorials content

This folder contains the content for our tutorials, which appear on [IBM
Quantum Learning](https://learning.quantum.ibm.com/catalog/tutorials).

## Editing tutorials

Each tutorial has its own folder in `tutorials/`. Within that folder is the
content notebook (ending in `.ipynb`) and an optional `images` folder. These
are linked to the learning platform through the `learning-api.conf.yaml` file,
which also contains the tutorials' metadata.

> [!Warning]
>
> ### Gotcha: Top-level headings
>
> One potential gotcha is that the learning platform ignores the top-level
> heading of the notebook. These headings are only included in the notebook for
> writers' convenience. If you want to change the title of a notebook, edit the
> title in `tutorials/learning-api.conf.yaml`.

## Adding new tutorials

To create a new tutorial, add a new notebook to the `tutorials/` folder and
make new entry to `learning-api.conf.yaml`. The next time the deploy action is
run, the tutorial will be created on the platform, so make sure to only merge
the change to `main` when you're ready for the tutorial to go live.

## Deploying tutorials

To deploy changes to tutorials, run the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow. This will push the notebooks and their metadata from the main branch
to the environment you select.

You should always start with deploying to "Learning platform (staging)". And
check that your tutorial renders properly.

Once you are happy with staging, rerun the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow, but this time choose "Learning platform (production)". Warning: this
will update every non-network tutorial to use the version from the `main`
branch. That means that if another author had a tutorial that was merged to
`main` but not yet ready to go live to production, you might accidentally
deploy their tutorial. So, before deploying to production, check with the team
that it is okay to deploy.

After deploying to production, check https://learning.quantum.ibm.com/catalog/tutorials
to ensure your tutorial is working correctly.
