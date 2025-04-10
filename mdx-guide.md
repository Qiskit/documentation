# How to write the documentation

Refer to:

- The [README](./README.md) for how to set up the project.
- Our [style guide](./style-guide.md) for technical writing guidance.

We use [MDX](https://mdxjs.com), which is like normal markdown but adds extensions for custom components we have.

Refer to the [Common Markdown syntax](https://commonmark.org/) for a primer on Markdown. The below guide focuses on the other features you can use when writing docs.

## How to add a new page

Choose which existing folder from `docs/` your new page belongs to (probably `guides`).

Next, choose the file name. The file name will determine the URL. For example, `start/my-new-page.mdx` results in the URL `start/my-new-page`. Choose a file name that will be stable over the page's lifespan and that is unlikely to clash with other topics. Use `-` rather than `_` as the delimiter. You can also ask for help choosing a name in the GitHub issue or pull request.

If your file will have non-trivial code in it, please create a Jupyter notebook ending in `.ipynb`, rather than an MDX file. We prefer Jupyter notebooks when there is code because we have tests to make sure that the code still executes properly, whereas MDX is not tested.

Add the file to these places:

- The appropriate "index" page in the Development workflow section, such as `guides/map-problem-to-circuits` AND the Tools section in the `_toc.json` file. Or, in the rare case that it doesn't belong on any of these pages, list it in `scripts/js/commands/checkPatternsIndex.ts` in the ALLOWLIST_MISSING_FROM_INDEX or the ALLOWLIST_MISSING_FROM_TOC section. For example, `"/guides/qiskit-code-assistant"`.
- qiskit_bot.yaml. Everyone listed under the file name is notified any time the file is updated. If someone wants to be listed as an owner but does not want to receive notifications, put their ID in single quotes. For example, - "`@NoNotifications`"
- The folder's `_toc.json`, such as `guides/_toc.json`. The `title` will show up in the left side bar. Note that the `url` leaves off the file extension. If you want a "New" pill to appear next to the page in the side bar, add `"isNew": true` and `"isNewDate:"YYYY-MM-DD"`with the page's publish date to that page's entry.
  > [!NOTE]
  > The New pill should be used to label a brand new page (or a page with significant updates to it) for about two weeks before removing the pill (by deleting `"isNew": true` and `"isNewDate": "YYY-MM-DD"`in its toc entry).

## Page metadata

Every page must set a `title` and `description`:

- The title is used for browser tabs and the top line of search results. It should usually match the title used in the `_toc.json` file.
- The description should describe the page in at least 50 but no more than 160 characters, ideally using some keywords. The description is what shows up as the text in search results. See https://github.com/Qiskit/documentation/issues/131 for some tips.

In MDX files, set the metadata at the top of the file like this:

```
---
title: Representing quantum computers
description: Learn about coupling maps, basis gates, and backend errors for transpiling
---
```

In Jupyter notebooks, set `title` and `description` in the `metadata` section for the file. In VSCode, you can set up the metadata with these instructions:

1. Open up the file with the "Open With..." option (one way to do this is to right-click the file name to find the "Open With..." option) and then "Text Editor".
2. Scroll down to the bottom of the file for the top-level key "metadata". Ensure that this is the metadata for the entire file and not for a single code block. You should see in the "metadata" section other entries like "language_info" and "nbconvert_exporter".
3. Add new keys in the "metadata" section for "title" and "description".

```json
"metadata": {
  "description": "Get started using Qiskit with IBM Quantum hardware in this Hello World example",
  "title": "Hello world",
  "celltoolbar": "Raw Cell Format",
  "kernelspec": { ...
}
```

## Links

Internal URLs referring to other docs pages should start with `/` and not include the file extension. For example:

- `[Qiskit SDK](/api/qiskit)`
- `[Bit ordering in the Qiskit SDK](/guides/bit-ordering)`

External URLs should use the entire URL, such as `[GitHub](https://github.com)`.

## Images

Images are stored in the `public/docs/images` folder. You should use subfolders to organize the files. For example, images for `guides/my-file.mdx` should be stored like `public/docs/images/guides/my-file/img1.png`.

To use the image:

```markdown
![Alt text for the image](/images/guides/your-file/your_image.png)
```

To add an inline images:

```markdown
Inline ![Alt text for the image](/images/guides/your-file/your_image.png) image
```

To include a caption:

```markdown
![Alt text for the image](/images/guides/your-file/your_image.png "Image caption")
```

You can include a version of the image to be with the dark theme. You only need to create an image with the same name ending in `@dark`. So for example, if you have a `sampler.png` image, the dark version would be `sampler@dark.png`. This is important for images that have a white background.

## Videos

Videos are stored in the `public/docs/videos` folder. You should use subfolders to organize the files. For example, images for `guides/my-file.mdx` should be stored like `public/docs/videos/guides/my-file/video1.mp4`.

To add a video:

```markdown
<video title="Write a description of the video here as 'alt text' for accessibility." className="max-w-auto h-auto" controls>
    <source src="/videos/guides/sessions/demo.mp4" type="video/mp4"></source>
</video>
```

## Math

We use [LaTeX](https://www.latex-project.org) to write math, which gets rendered by the library [KaTeX](https://katex.org).

Inline math expressions should start with `$` and end with `$`, e.g. `$\frac{123}{2}$`.

Multi-line expressions should start with `$$` and end with `$$`:

```markdown
$$
L = \frac{123}{2} \rho v^2 S C_1s
$$
```

## Tables

Tables are supported: https://www.markdownguide.org/extended-syntax/.

Warning: do not use `|` inside LaTeX/math expressions. Markdown will incorrectly interpret `|` as the divider between cells. Instead, use `\vert`.

## Comments

Example comment: `{/* Comes from https://qiskit.org/documentation/partners/qiskit_ibm_runtime/getting_started.html */}`

## Collapsible sections

For content that you don't want to show by default, use a collapsible section. The user will need to expand the section to read its contents. Refer to GitHub's guide on [`<details>` and `<summary>`](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections).

## Footnotes

```
Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Second footnote text.
```

## Trademark symbols

Refer to [the style guide](./style-guide.md#proper-marking-and-attribution) for expectations on marking and attribution.

To create the symbols in markdown:

Use `&reg;` to get &reg; for registered trademarks.

use `&trade;` to get &trade; for nonregistered trademarks.

⚠️ **Note**: Do not include trademarks in headings. The code will display rather than the symbol.

## Platform-specific pages

You can restrict pages to only appear on a specific platform (IQP Cloud or IQP Classic).

1. Add `"platform": "cloud"` or `"platform": "legacy"` to the pages' entry in `_toc.json`. This will stop the page from appearing in the left table of contents in the other platform.

   ```json
   {
     "title": "Connecting to IBM Cloud",
     "url": "/cloud/connect-to-ibm-cloud",
     "platform": "cloud"
   }
   ```

   **Note:** If every page in a section is platform-specific, you must also add the `"platform"` attribute to the section too. Otherwise, users will see an empty section on the other platform.

2. Add `platform: cloud` to the page's metadata. This will make the page 404 if a user tries to access that page's URL. See [Page metadata](#page-metadata) for how to set this.

## Custom components

These are components that we expose through MDX. You can use them in both
`.mdx` and `.ipynb` files. In Jupyter notebooks, use Markdown cells.

### Admonitions

To use an `Admonition`, use the following syntax

```mdx
<Admonition type="note">This is an example of a note.</Admonition>
```

Available types are `note, tip, info, caution, danger`. This is what they look like:

![types](https://github.com/Qiskit/documentation/assets/66339736/9911d171-2dbb-45a2-af84-6502d5fc0ae0)

By default, the title is the `type` capitalized. You can customize it by setting `title`:

```mdx
<Admonition type="note" title="Custom title">
  This is a __note__ example
</Admonition>
```

We also have a specialized admonition for Qiskit Code Assistant prompt suggestions. Warning: avoid a trailing comma on the last entry in `prompts`!

```mdx
<CodeAssistantAdmonition
  tagLine="Need help? Try asking Qiskit Code Assistant."
  prompts={[
    "# Print the version of Qiskit we're using",
    "# Return True if the version of Qiskit is 1.0 or greater",
    "# Install Qiskit 1.0.2"
  ]}
/>
```

### Definition Tooltip

To use a `DefinitionTooltip`, use the following syntax:

```mdx
<DefinitionTooltip definition="Definition for the Term">Term</DefinitionTooltip>
```

For full list of props, please check [here](https://react.carbondesignsystem.com/?path=/docs/components-definitiontooltip--playground#component-api).

Warning: do not use LaTeX/math expressions in the same paragraph as a definition tooltip because it will break the styling. Use a new line to separate out the two into separate paragraphs.

### Tabs

To use a `Tabs` component, use the following syntax:

```mdx
<Tabs>
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This is the text for QASM
  </TabItem>
</Tabs>
```

By default, the first tab is selected. You can change that by using the `defaultValue` prop.

```mdx
<Tabs defaultValue="qasm">
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This is the text for QASM
  </TabItem>
</Tabs>
```

There are situations where you want to repeat the same tabs in several part of the page. In this situation, you can use the prop `group` to synchronize the selected tab in all usages.

```mdx
<Tabs group="my-group">
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This is the text for QASM
  </TabItem>
</Tabs>
```

There is a specific use case where you want to show instructions for different operating systems. In this situation, you can replace the `Tabs` component by a `OperatingSystemTabs`. The default value of the tab will be selected based on the user's operating system.

```mdx
<OperatingSystemTabs>
  <TabItem value="mac" label="macOS">
    Open a terminal and write the command
  </TabItem>
  <TabItem value="linux" label="Linux">
    Open a terminal and write the command
  </TabItem>
  <TabItem value="win" label="Windows">
    Go to windows/run and write `cmd`. It will open a command line. Execute this
    command
  </TabItem>
</OperatingSystemTabs>
```

### CodeCellPlaceholder

This component only works in notebooks. Notebook code cells are always at the
top-level of content, but sometimes you'll want to have them nested in other
components, such as in tabs or in a list. While you could write your code
as a markdown block, it's usually preferable to keep the code as a code block
so that it is executed and its code can be later used in the notebook. The
CodeCellPlaceholder component allows you to still use a code block, but move
it to render somewhere else in the notebook.

To use this component, add a tag
starting with `id-` to the code cell you'd like to move, then add a
`<CodeCellPlaceholder tag="id-tag" />` component with the same tag somewhere in
your markdown. This will move that code cell into the place of the component.

You can then use this component anywhere in your markdown. While you can move code
cells anywhere, try to keep them relatively close to their position in the
notebook and preserve their order to avoid confusion.

Here's an example of what this might look like in your notebook source.

```json
{
 "cell_type": "code",
 "execution_count": 1,
 "metadata": {
  "tags": [
   "id-example-cell"
  ]
 },
 "outputs": [
  {
   "data": {
    "text/plain": [
     "Hello, world!"
    ]
   },
  }
 ],
 "source": [
  "# This is a code cell\n",
  "print(\"Hello, world!\")"
 ]
},
{
 "cell_type": "markdown",
 "source": [
  "This is a notebook markdown cell.",
  "\n",
  "<Tabs>\n",
  "<TabItem value=\"Example\" label=\"Example\">\n",
  "  This `TabItem` contains a notebook code cell\n",
  "  <CodeCellPlaceholder tag=\"id-example-cell\" />\n",
  "</TabItem>\n",
  "</Tabs>"
 ]
}
```
