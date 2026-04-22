# Adding courses to Qiskit/documentation

This guide walks through the full process of adding a course to the documentation site.

This guide assumes you have a local clone of Qiskit/documentation, Node 18+ (via [NVM](https://github.com/nvm-sh/nvm)), [tox](https://pipx.pypa.io/stable/) (via pipx), and [Rancher Desktop](https://rancherdesktop.io/) installed.

1. Make a new folder for the course under `/learning/courses`. The name of this folder will be the slug of the course on the website. For example, `/learning/courses/my-course` will have the URL https://quantum.cloud.ibm.com/learning/my-course.

2. Add your notebooks to this folder.

   > :warning: **Warning:**
   > Make sure there are no capital letters in your filenames before you commit them.

3. Name each notebook so the filename matches the slug that page should have on the website. For example, `/learning/courses/my-course/my-file.ipynb` will have the URL https://quantum.cloud.ibm.com/learning/my-course/my-file.

4. Add the `title` and `description` to the first markdown cell of each notebook using frontmatter format, followed by a top-level heading:

   ```
   ---
   title: My title
   description: My description
   ---

   # My title
   ```

5. Run `./fix` to lint the notebooks. Ruff might complain about your code: you can either fix it if it's easy enough, or ignore specific rules using the following instructions:

   - Create a new code cell at the top of the notebook.
   - Add a `remove-cell` tag to the cell. This prevents the cell from displaying on the website.
   - Use a comment in that cell to disable specific rules in that notebook. For example, if you wanted to disable rules `E402` and `F811`:

     ```python
     # This cell is hidden from users, it disables some lint rules
     # ruff: noqa: E402 F811
     ```

6. Move any images to `/public/learning/images/courses/<your-course-name>/`:

   - If the images are not `.avif` or `.svg`, you must convert them to `.avif`. Use [ImageMagick](https://imagemagick.org/index.php) for this. You should be able to run `magick path/to/file.png path/to/file.avif` then delete the original file.
   - If the images are attachments in the notebook, you'll need to extract them to separate files. Speak to @Frank if you have any questions.
   - With the image files in the correct place, update the markdown to point to the new images, leaving off the `public` part of the path. For example, if your file lives in `public/learning/images/courses/my-course/image.avif`, then your markdown should be:
     ```markdown
     ![alt-text](/learning/images/courses/my-course/image.avif)
     ```

7. Remove any HTML from the notebooks other than our [supported MDX components](https://github.com/Qiskit/documentation/blob/main/mdx-guide.md). If you need some functionality not supported by the allowed components, let us know and we can help find a solution.

8. For collapsible content, use `<Accordion>` and `<AccordionItem>` components. For example:

   ```
   <Accordion>
   <AccordionItem title="Answer">
   Your content here.
   </AccordionItem>
   </Accordion>
   ```

   Note that `<AccordionItem>` titles cannot contain `\pmatrix` equations or images. If your content references either, place it above the `<Accordion>` section.

9. Replace any YouTube `iframe` tags with a thumbnail image that links to the video using the `<ImageLink>` component. See the QCIP course for examples.

10. Add video embeds to lessons that have accompanying videos. We use IBM Video Streaming with the `<IBMVideo>` component. The `id` is the IBM Video Streaming ID (not the YouTube ID). In a markdown cell, add the following:

    ```
    In the following video, [presenter name] steps you through the content in this lesson. Alternatively, you can open the [YouTube video](https://youtu.be/YOUR_VIDEO_ID) for this lesson in a separate window.

    <IBMVideo id="YOUR_IBM_VIDEO_ID" title="Description of the video content."/>
    ```

11. Add the notebooks to `scripts/config/notebook-testing.toml`. This file tells our testing framework how to test the notebooks. For now, we won't test learning notebooks so you should add their paths to the `groups.exclude` group.

12. Create an overview page for your course named `index.mdx`. Use the following template to get started:

    ```mdx
    ---
    title: Overview
    description: TODO – SEO description between 50-160 characters
    ---

    # Overview

    TODO: Describe your course here
    ```

13. Add the file owners to `qiskit_bot.yaml`. This file tells us who the points of contact are for each notebook so we can contact them when needed. Add an entry for each notebook and `.mdx` file in your course, listing the relevant GitHub handles.

14. List your course in `learning/courses/index.mdx` and create a `_toc.json` file for your course. You'll need to manually order the "children" entries in the `_toc.json` to match the intended lesson order.

15. Run `./check`. This will verify you've done everything correctly so far. It'll also run the spellcheck — follow the instructions from the spellchecker to fix all spelling problems.

16. With all the checks complete, start up the local preview by opening Rancher Desktop, then running `./start` in your terminal. Find your course and visit each page, checking carefully that everything is displaying correctly. If any pages crash (500 error), it's usually due to HTML in the notebook. If you can't work out why a page is crashing, speak to @Frank and he'll help you debug it.

17. Run `./fix` and `./check` again to make sure everything still works. If so, you can push your changes and make a pull request! 🎉
