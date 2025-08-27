# Docs for function-name

Welcome! Use this repository to develop the documentation for your Qiskit Function privately before the launch. Once ready, we will move your documentation to [Qiskit/documentation](https://github.com/Qiskit/documentation), where it will live long-term.

You can also develop a tutorial. Refer to [tutorials-guidelines.md](./tutorials-guidelines.md)

## How to structure your files

We added two files for you to get started:

* `docs/guides/<function-name>.ipynb`
* `docs/tutorials/<function-name>.ipynb`

## How to write Jupyter notebooks and MDX files

We use two technologies for writing documentation:

- [MDX](https://mdxjs.com), which is like normal markdown but adds extensions for the custom components we use.
- Jupyter notebooks

Jupyter notebooks consist of code blocks and `markdown` blocks. When writing text, use MDX inside `markdown` blocks.

Refer to [qiskit/documentation's MDX guide](https://github.com/Qiskit/documentation/blob/main/mdx-guide.md) for detailed instructions to use MDX.

tl;dr:

* Store images in the appropriate subdirectory inside `public/docs/images`. Then, link to them without the `public/` prefix. For example, add `public/docs/images/guides/<function-name>/img-name.ext`, then link to it with `![Required alt text](/docs/images/guides/<function-name>/img-name.ext "Optional caption")`.
* Use the [`<Admonition>`](https://github.com/Qiskit/documentation/blob/main/README.md#admonitions) component to add warnings, notes, and other callouts.
* Math: use `$` for inline expressions, and `$$` for math blocks.
* [Tables are supported](https://www.markdownguide.org/extended-syntax/).
* To add relative links, use paths without the file extension, like `[Other page](/docs/guides/other-page#optional-anchor-in-other-page)`
* See [the style guide](https://github.com/Qiskit/documentation/blob/main/style-guide.md). We will help you with any questions, too.
* Add metadata inside the `metadata` section of your Jupyter notebook near the bottom of the file. Run `./check` to validate it.

### Setting up your environment

When writing your guide, you must use the same Python requirements we use in the rest of the documentation. This ensures that all code examples will work in our users' environments. Follow these steps to get set up in a new virtual environment.

1. Install Python 3.11 through your package manager or https://www.python.org/downloads/. We use an older version of Python to make sure our code works for as many users as possible.

2. Create a new Python virtual environment.

   ```sh
   python3.11 -m venv .venv
   ```

3. Activate that environment.

   For OSX/Linux

   ```sh
   # OSX / Linux
   source .venv/bin/activate

   # Windows
   .venv\Scripts\activate
   ```

   you're now in a fresh Python virtual environment.

4. Install our dependencies.

   ```sh
   pip install -r requirements.txt
   ```

5. (Optional) Register this environment with Jupyter.

   Follow this step inside your virtual environment if you want to use Jupyter to write your notebook.

   ```sh
   pip install ipykernel
   python -m ipykernel install --user --name=qiskit-functions
   ```

   You should then be able to select the `qiskit-functions` environment from your editor.

If you need to add another dependency, contact Sanket Panda or Paco Martin to discuss adding it to our requirements. Note that we can only add essential dependencies; if it's possible, we'll ask you to rewrite the code examples using the packages that are already part of the environment. Run `pip list` inside your virtual environment to see a list of installed packages.

## How to preview the docs

Follow these steps to preview the documentation locally:

1. Ensure Docker is running.
2. Run `./start` in your terminal, then open [localhost:3000/](http://localhost:3000/) in your browser.

The preview will not have any other content, such as API documentation.

You may need to restart the preview when making changes by using ctrl-c, then running `./start` again.

## Quality checks

Before running quality checks, complete these one-time setup steps: 

1. Install [Node.js], Docker, and Tox by following the instructions in [qiskit/documentation](https://github.com/Qiskit/documentation?tab=readme-ov-file#prerequisites-to-building-the-docs-locally).
2. Run `npm install`; this will take 1-2 minutes to run.

To run all the checks:

```bash
./check
```

We also have a script to automatically fix some things, like formatting:

```bash
./fix
```

### Spelling false positives

If `./check` complains about a legitimate word, add a comment like below to the top of your Jupyter notebook inside a markdown block. The words are not case-sensitive.

```
{/* cspell:ignore hellllooooo, ayyyyy */}
```
