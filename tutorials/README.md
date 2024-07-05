# Tutorials content

This folder contains the content for our tutorials, which appear on [IBM
Quantum Learning](https://learning.quantum.ibm.com/catalog/tutorials).

## Editing and deploying existing tutorials

Each tutorial has its own folder in `tutorials/`. Within that folder is the
content notebook (ending in `.ipynb`) and an optional `images` folder. These
are linked to the learning platform through the `learning-api.conf.yaml` file,
which also contains the tutorials' metadata.

Once your changes are in `main`, follow the steps in "Deploy tutorials" to
publish them.

> [!Note]
>
> ### Gotcha: Top-level headings
>
> The learning platform ignores the top-level heading of the notebook. These
> headings are only included in the notebook for writers' convenience. If you
> want to change the title of a notebook, edit the title in
> `tutorials/learning-api.conf.yaml`.

> [!Warning]
>
> The uploader identifies tutorials by their slugs. If you change a slug in
> `tutorials/learning-api.conf.yaml`, the uploader will ignore the old tutorial
> and try to create a new tutorial with the new slug. If you need to change a
> slug, the best approach is to create a new tutorial with the new slug (see
> "Deploy tutorials"), set up a redirect with the learning platform team, then
> delete the old tutorial (see "Deleting a tutorial").

## Add a new tutorial

To create a new tutorial, add a new notebook to the `tutorials/` folder and
make a new entry in `learning-api.conf.yaml`. When you're ready to publish,
merge to `main` and follow the steps in "Deploy tutorials".

The next time the deploy action is run, the tutorial will be created on the
platform, so make sure to only merge the change to `main` when you're ready for
the tutorial to go live.

## Deploy tutorials

Once your changes are in `main`, you can deploy them by running the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow. This will push **all** notebooks and their metadata from the main
branch to the environment you select.

Start by deploying to the environment "Learning platform (staging)" and check
that your tutorial renders properly. Ask a teammate for the staging link if you
need it.

Once you are happy with staging, rerun the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow, but this time choose "Learning platform (production)".

After deploying to production, check https://learning.quantum.ibm.com/catalog/tutorials
to ensure your tutorial is working correctly.

## Deleting a tutorial

Before deleting a tutorial, make sure appropriate redirects are set up. Speak
to the learning platform team to set up a redirect.

To delete a tutorial, first remove its entry from
`tutorials/learning-api.conf.yaml`. This will **not** delete the tutorial from
the learning platform, but it will stop the uploader trying to create or update
that tutorial.

Next, have someone with the correct permissions go into the learning CMS and
set the page to "archived". This will take the page off the learning platform.
