# Tutorial sources

Notebooks in this directory back published pages but are not published themselves. Anything under `docs/` or `learning/` becomes its own page, so a notebook that only exists to test or download code for an MDX page lives here instead.

For example, `sqdrift/sqdrift.ipynb` holds the Python walkthrough of [`docs/tutorials/sqdrift.mdx`](../docs/tutorials/sqdrift.mdx), which shows Python and C++ versions of the tutorial in tabs. The notebook is executed by the notebook tester and linked from the page as a download, and its code must be kept in sync with the page's Python tab.

When you add a notebook here, also:

- Add it to `scripts/config/notebook-testing.toml`.
- Add an owner for it in `qiskit_bot.yaml`.
- Link to it from the page it backs, and note in that page that the two must stay in sync.

Images extracted from a notebook here go to `public/docs/images/tutorials/<notebook name>/extracted-outputs/`, so the MDX page can reference them like any other tutorial image.
