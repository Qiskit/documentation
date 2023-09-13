import grayMatter from "gray-matter";
import fs from "fs/promises";
import { globby } from "globby";

const readMetadata = async (filePath) => {
  const ext = filePath.split(".").pop();
  if (ext === "md" || ext === "mdx") {
    const content = await fs.readFile(filePath, "utf-8");
    return grayMatter(content).data;
  } else if (ext === "ipynb") {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content).metadata;
  } else {
    throw new Error(`Unknown extension for ${filePath}: ${ext}`);
  }
};

const isValidMetadata = (metadata) => metadata.title && metadata.description;

const main = async () => {
  const mdErrors = [];
  const mdFiles = await globby("docs/**/*.{md,mdx}");
  for (const file of mdFiles) {
    const metadata = await readMetadata(file);
    if (!isValidMetadata(metadata)) {
      mdErrors.push(file);
    }
  }

  const notebookErrors = [];
  const notebookFiles = await globby("docs/**/*.ipynb");
  for (const file of notebookFiles) {
    const metadata = await readMetadata(file);
    if (!isValidMetadata(metadata)) {
      notebookErrors.push(file);
    }
  }

  if (mdErrors.length > 0) {
    console.error(`
      Invalid markdown file metadata. Every .md and .mdx file should start with a metadata block like this:

      ---
      title: OpenQASM 3 feature table
      description: A list of the OpenQASM 3 language features
      ---


      Please fix these files: ${mdErrors}
    `);
  }
  if (notebookErrors.length > 0) {
    console.error(`
      Invalid Jupyter notebook metadata. Every .ipynb file needs to 
      set 'title' and 'description' in the file metadata.

      Please fix these files: ${notebookErrors}
    `);
  }
  if (mdErrors.length > 0 || notebookErrors.length > 0) {
    process.exit(1);
  }
};

main();
