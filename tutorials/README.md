# Tutorials content

This folder contains the content for our tutorials, which appear on [IBM
Quantum Learning](https://learning.quantum.ibm.com/catalog/tutorials).

## Deploying tutorials

To deploy changes to tutorials, run the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow. This will push the notebooks on the main branch to the environment
you select.

You should always start with deploying to "Learning platform (staging)". This
will deploy to https://learning.www-dev.quantum.ibm.com/catalog/tutorials.
Check that your tutorial renders properly.

Once you are happy with staging, rerun the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow, but this time choose "Learning platform (production)". Warning: this will
update every non-network tutorial to use the version from the `main` branch. That means
that if another author had a tutorial that was merged to `main` but not yet ready to go live
to production, you might accidentally deploy their tutorial. So, before deploying to
production, check with the team that it is okay to deploy.

After deploying to production, check https://learning.quantum.ibm.com/catalog/tutorials
to ensure your tutorial is working correctly.

## Gotcha: tutorial headings ignored

One potential gotcha is that the learning platform ignores the top-level
heading of the notebook. These headings are only included in the notebook for
writers' convenience. If you want to change the title of a notebook, find the
page on https://learning-api.quantum.ibm.com/admin and change its title
there. Make sure to update the title in the notebook too.

## Adding new tutorials

Each tutorial has its own folder in `tutorials/`. Within that folder is the content notebook
(ending in `.ipynb`) and an optional `images` folder.

To add a new tutorial to the learning platform, go to
https://learning-api.quantum.ibm.com/admin/ and choose "Create item" (the blue
`+` in the top-right corner). Enter all the information, but leave the content
field blank. This will create the tutorial in "draft" mode.

Once you've added the tutorial, copy the tutorial's URL relative to `content`
(that is, the URL after `https://learning-api.quantum.ibm.com/admin/content/`).
The copied URL should be of the form `tutorials/<UUID>`. Next, make a new entry
in the `learning-api.conf.yaml` file in this folder. Set the `path` attribute
to the name of the tutorial folder in this repo, and `urlProduction` to the
tutorial ID you copied earlier. Repeat the same process for the staging
environment (https://learning-api-dev.quantum.ibm.com/admin/).

Next, you will need to add the tutorial to our API token permissions. To do
that, contact Abdón Rodríguez and ask to add the tutorial IDs to the
Qiskit/documentation API keys.

To push content from this repo to the learning platform, run the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow. This will push the content of **all** tutorials from the main branch.
Once your content is uploaded, you can go back to the admin panel for that
tutorial and publish the lesson to take it out of draft mode.
