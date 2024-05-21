# Tutorials content

This folder contains the content for our tutorials, which appear on [IBM
Quantum Learning](https://learning.quantum.ibm.com/catalog/tutorials).

## Deploying tutorials

To deploy changes to existing tutorials, run the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow. This will push the notebooks on the main branch to the environment
you select.

You should always start with deploying to "Learning platform (staging)". This
will deploy to https://learning.www-dev.quantum.ibm.com/catalog/tutorials.
Check that your tutorial renders properly.

Once you are happy with staging, rerun the [Deploy
tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
workflow, but this time choose "Learning platform (production)". Warning: this
will overwrite every non-network tutorial with the version from the `main`
branch.

After deploying to production, check https://learning.quantum.ibm.com/catalog/tutorials
to ensure your tutorial is working correctly.

## Gotcha: Tutorial titles

The learning platform ignores the top-level heading of the notebook. These
headings are only included in the notebook for writers' convenience.

> [!CAUTION]
> The title dictates the URL slug. Do not change a tutorial's title without
> having appropriate redirects set up.

If you want to change the title of a notebook, find the page in the CMS and
change its title there. Make sure to update the title in the notebook too.

## Adding new tutorials

Each tutorial has its own folder in `tutorials/`. Within that folder is the content notebook
(ending in `.ipynb`) and an optional `images` folder.

Once you've decided to add a new tutorial to the learning platform, a person
with appropriate permissions to the learning platform should follow these
steps.

1. **Create a new page on the learning platform**

   For both environments (staging and production), log on to the CMS and go to
   the "tutorials" tab. Click "Create item" (the blue `+` in the top-right
   corner) and enter all the information, but leave the content field blank.
   This will create the tutorial in "draft" mode.

2. **Give our token permission to push to the tutorial**

   > TODO: Improve this; I don't have permission to do this so can't give more details.

   Next, we need to give the token in this repo permission to push to the new
   tutorial. In the CMS, go to "Users", then give "Token: Qiskit/documentation"
   permission to push to the new tutorial.

3. **Link the notebook in this repo to the learning platform**

   For our action to upload content from this repo, we need to link the
   tutorial you created in the learning platform to the file in this
   repository. Repeat this for staging and production.

   1. **Get the URL**

      Navigate to the tutorial in the CMS and copy the URL relative to
      `content` (that is, the URL after
      `https://learning-api.quantum.ibm.com/admin/content/`). The copied URL
      should be of the form `tutorials/a00eed3f-fdba-416d-8f22-7a2522de02bc`.

   2. \*\*Update `tutorials/learning-api.conf.yaml`

      Next, make a new entry in the `learning-api.conf.yaml` file in this
      folder. Set the `path` attribute to the name of the tutorial folder in
      this repo, and the appropriate URL to the URL you copied in the previous
      sub-step.

4. **Push the content from this repo to the learning platform**

   To push content from this repo to the learning platform, run the [Deploy
   tutorials](https://github.com/Qiskit/documentation/actions/workflows/deploy-tutorials.yml)
   workflow. This will push the content of **all** tutorials from the main
   branch. Do this for both staging and production.

5. **Review and publish**

   One the content is uploaded, go back to the admin panel for that tutorial in
   **staging** and publish the lesson to take it out of draft mode. You'll need
   to click the "tick" in the top-right corner of the page to save your
   changes. Check out the page on the staging website and make sure it looks
   correct. If everything looks correct, follow the same steps to publish the
   page in production.
