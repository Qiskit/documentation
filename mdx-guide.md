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

- qiskit_bot.yaml. Everyone listed under the file name is notified any time the file is updated. If someone wants to be listed as an owner but does not want to receive notifications, put their ID in single quotes. For example, - "`@NoNotifications`"
- The folder's `_toc.json`, such as `guides/_toc.json`. The `title` will show up in the left side bar. Note that the `url` leaves off the file extension. If you want a "New" pill to appear next to the page in the side bar, add `"isNew": true` and `"isNewDate:"YYYY-MM-DD"`with the page's publish date to that page's entry.
  > [!NOTE]
  > The New pill should be used to label a brand new page (or a page with significant updates to it) for about two weeks before removing the pill (by deleting `"isNew": true` and `"isNewDate": "YYY-MM-DD"`in its toc entry).

## Page metadata

Every page must set a `title` and `description`:

- The title is used for browser tabs and the top line of search results. It should usually match the title used in the `_toc.json` file.
- The description should describe the page in at least 50 but no more than 160 characters, ideally using some keywords. The description is what shows up as the text in search results. See https://github.com/Qiskit/documentation/issues/131 for some tips.

Set the metadata at the top of the file like this:

```
---
title: Representing quantum computers
description: Learn about coupling maps, basis gates, and backend errors for transpiling
---
```

Avoid using hyphens, colons, semicolons, backticks, and pipes when writing the `title` and `description`. These characters might be used differently in other languages, and their use might complicate the translation process. Our translation tooling often replaces them with other symbols that could change their meaning or even break the page.

## Links

Internal URLs referring to other docs pages should start with `/docs` and not include the file extension. For example:

- `[Qiskit SDK](/docs/api/qiskit)`
- `[Bit ordering in the Qiskit SDK](/docs/guides/bit-ordering)`

External URLs should use the entire URL, such as `[GitHub](https://github.com)`.

## Images

Images are stored in the `public/docs/images` folder. You should use subfolders to organize the files. For example, images for `guides/my-file.mdx` should be stored like `public/docs/images/guides/my-file/img1.png`.

To use the image:

```markdown
![Alt text for the image](/docs/images/guides/your-file/your_image.png)
```

To add an inline images:

```markdown
Inline ![Alt text for the image](/docs/images/guides/your-file/your_image.png) image
```

To include a caption:

```markdown
![Alt text for the image](/docs/images/guides/your-file/your_image.png "Image caption")
```

You can include a version of the image to be with the dark theme. You only need to create an image with the same name ending in `@dark`. So for example, if you have a `sampler.png` image, the dark version would be `sampler@dark.png`. This is important for images that have a white background.

## IBM Videos

The `IBMVideo` component allows you to add embedded videos from [video.ibm.com](https://video.ibm.com).

To use the component, you only need the video's `id` and a descriptive `title` that will be used for accessibility purposes:

```markdown
<IBMVideo id="134056207" title="This is an example"/>
```

Ensure that the video is allowed to be embedded on `*.cloud.ibm.com` and `qiskit.github.io`. This is set as metadata in IBM Video Streaming. This should work automatically as long as the video is uploaded to the same group as our other videos.

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

Tables are supported: https://www.markdownguide.org/extended-syntax/#tables

To include lists inside a cell, use `<ul>` or `<ol>`, along with `<li>`. You can also use normal Markdown links and the `Admonition` component. For example:

```
| Header |
| -- |
| <ol><li>Entry 1</li><li>Entry 2</li></ol> |
| [a link](https://ibm.com) |
| <Admonition title="A warning">Some content.</Admonition> |
```

However, be careful to not add overly complex components like `<Tabs>` because they can make the site hard to interact with and be bad for accessibility. 

With LaTex and math expressions, do not use `|` because Markdown will incorrectly interpret `|` as the divider between cells. Instead, use `\vert`.

Be careful to avoid overly wide tables, as they do not render well on small screens. Instead, consider alternative content layout like using [collapsible sections](#collapsible-sections).

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

## Custom components

These are components that we expose through MDX. You can use them in both
`.mdx` and `.ipynb` files. In Jupyter notebooks, use Markdown cells.

### Admonitions

To use an `Admonition`, use the following syntax

```mdx
<Admonition type="note">
This is an example of a note.
</Admonition>
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

### Figures

Use this component for proofs, theorems, definitions, or anything that is
referenced in the main flow of the document, but could be moved to another part
of the document without affecting the main flow.

To insert a figure, use the following syntax.

```mdx
<Figure title="Proof">
  You can use any MDX inside a figure.
</Figure>
```

### Definition Tooltip

To use a `DefinitionTooltip`, use the following syntax:

```mdx
<DefinitionTooltip definition="Definition for the Term">Term</DefinitionTooltip>
```

For full list of props, please check [here](https://react.carbondesignsystem.com/?path=/docs/components-definitiontooltip--playground#component-api).

Caveats:

1. Do not use any interactive content (e.g. links) with the `definition` prop or inside the tags. If you use such content, it will not be available to users of screen reader software.
2. Do not use single and double quotes in the `definition` prop. Even if they are escaped, they cause problems when translating the files.

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

### Card

The `Card` component creates a clickable card that links to another page, such as our [API index page](https://quantum.cloud.ibm.com/docs/api). 

To use, first set up a `CardGroup` component. Then, insert one or more `Card` components inside the `CardGroup`. For each `Card`, you must set these properties:

* `title`
* `description`
* `href`: the link
* `analyticsName`: an internal identifier for analytics. A good format is `brief page name: brief description of the card`
* `linkText` (optional): the text used for the arrow, such as 'Learn more'. Defaults to 'See details'

```mdx
<CardGroup>
    <Card
      title="Approximate quantum compilation tensor"
      description="Supports the construction of high-fidelity circuits with reduced depth"
      href="/docs/api/qiskit-addon-aqc-tensor"
      analyticsName="overview page: addon AQC Tensor"
    />

    <Card
      title="Qiskit SDK"
      description="A radical software development kit"
      href="/docs/api/qiskit"
      analyticsName="overview page: Qiskit SDK"
      linkText="Learn more"
    />
</CardGroup>
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

### LeftColoredBar

The `LeftColoredBar` component adds a colored bar that wraps all the content inside it. Currently we support two colors (`blue` and `purple`) that can be picked by using the `color` property:

```md
<LeftColoredBar color="blue">
  You can use any MDX inside this component.
</LeftColoredBar>
```
