// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { globby } from "globby";
import { readFile } from "fs/promises";
import path from "node:path";
import { Link, File } from "../lib/LinkChecker";
import markdownLinkExtractor from "markdown-link-extractor";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkStringify from "remark-stringify";
import { Root } from "remark-mdx";
import rehypeRemark from "rehype-remark";
import rehypeParse from "rehype-parse";
import remarkGfm from "remark-gfm";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

// The links in the files are not searched to see if they are valid.
// The files need a list of links to be ignored, and when an asterisk
// (*) is used as a link, all the links in the file will be ignored.
const FILES_TO_IGNORES: { [id: string]: string[] } = {
  "docs/api/qiskit/release-notes/0.44.md": ["*"],
  "docs/api/qiskit-ibm-provider/ibm-provider.md": ["ibm_provider"],
  "docs/api/qiskit-ibm-runtime/ibm-runtime.md": ["runtime_service"],
  "docs/api/qiskit/pulse.md": [
    "qiskit.pulse.library.Constant_class.rst#qiskit.pulse.library.Constant",
    "qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag",
    "qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag",
    "qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian",
    "qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian",
    "qiskit.pulse.library.Sin_class.rst#qiskit.pulse.library.Sin",
    "qiskit.pulse.library.Cos_class.rst#qiskit.pulse.library.Cos",
    "qiskit.pulse.library.Sawtooth_class.rst#qiskit.pulse.library.Sawtooth",
    "qiskit.pulse.library.Triangle_class.rst#qiskit.pulse.library.Triangle",
    "qiskit.pulse.library.Square_fun.rst#qiskit.pulse.library.Square",
    "qiskit.pulse.library.Sech_fun.rst#qiskit.pulse.library.Sech",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.NFT.md": ["#id2", "#id1"],
  "docs/api/qiskit/qpy.md": [
    "circuit#qiskit.circuit.CASE_DEFAULT",
    "#id8",
    "#id2",
    "#f8",
    "#id6",
    "#id4",
    "#f3",
    "#f2",
    "#f1",
    "/api/qiskit/circuit#qiskit.circuit.CircuitError",
    "id2",
    "/api/qiskit/qpy#id1",
    "/api/qiskit/circuit#qiskit.circuit.CircuitError'",
  ],
  "docs/api/qiskit/qiskit.circuit.QuantumCircuit.md": [
    "qiskit.org/documentation/tutorials/circuits/3_summary_of_quantum_operations",
    "circuit#qiskit.circuit.CASE_DEFAULT",
  ],
  "docs/api/qiskit/qiskit.circuit.SwitchCaseOp.md": [
    "circuit#qiskit.circuit.CASE_DEFAULT",
  ],
  "docs/api/qiskit/qiskit.pulse.library.GaussianSquareDrag.md": [
    "qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag",
    "qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian",
  ],
  "docs/api/qiskit/utils.md": [
    "https://github.com/python-constraint/python-constraint%3E__",
    "#qiskit.utils.optionals.HAS_TESTTOOLS",
    "#qiskit.utils.optionals.HAS_GRAPHVIZ",
    "#qiskit.utils.optionals.HAS_PYDOT",
  ],
  "docs/api/qiskit-ibm-provider/qiskit_ibm_provider.IBMProvider.md": [
    "https://auth.quantum-computing.ibm.com/api",
  ],
  "docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.QiskitRuntimeService.md": [
    "https://auth.quantum-computing.ibm.com/api",
  ],
  "docs/api/qiskit/algorithms.md": ["https://www.qiskit.org/terra"],
  "docs/api/qiskit/qiskit.algorithms.Grover.md": [
    "https://qiskit.org/textbook/ch-algorithms/grover.html",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.ISRES.md": [
    "https://notendur.hi.is/tpr/software/sres/Tec311r.pdf",
  ],
  "docs/api/qiskit/qiskit.algorithms.optimizers.SPSA.md": [
    "https://ieeexplore.ieee.org/document/657661",
  ],
};

// The files in the folders are not searched to see if their links
// are valid.
const FOLDERS_TO_IGNORES: string[] = [];

// While these files don't exist in this repository, the link
// checker should assume that they exist in production.
const SYNTHETIC_FILES: string[] = [
  "docs/errors.mdx",
  "docs/api/runtime/tags/programs.mdx",
];

interface Arguments {
  [x: string]: unknown;
  external: boolean;
  "qiskit-release-notes": boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("external", {
      type: "boolean",
      demandOption: false,
      default: false,
      description:
        "Should external links be checked? This slows down the script, but is useful to check.",
    })
    .option("qiskit-release-notes", {
      type: "boolean",
      demandOption: false,
      default: false,
      description:
        "Should all the qiskit release notes be checked? By default only the latest version is validated.",
    })
    .parseSync();
};

function markdownFromNotebook(source: string): string {
  let markdown = "";
  for (let cell of JSON.parse(source).cells) {
    if (cell.cell_type === "markdown") {
      cell.source.forEach((s: string) => (markdown += s + "\n"));
    }
  }
  return markdown;
}

async function lastestQiskitReleaseNote(): Promise<string | undefined> {
  const releaseNotes = await globby("docs/api/qiskit/release-notes/*");
  return releaseNotes
    .sort((a, b) => {
      return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    })
    .pop();
}

/**
 * Return a list of File objects with all the files
 * in `filePaths` and two lists of Link objects with all
 * the internal and external links found in those files.
 */
async function loadFilesAndLinks(
  filePaths: string[],
): Promise<[File[], Link[], Link[]]> {
  const args = readArgs();

  const fileList: File[] = [];
  const internalLinkList: Link[] = [];
  const externalLinkList: Link[] = [];

  // Auxiliary Map to avoid link duplications
  const linkMap = new Map<string, string[]>();

  // Files inside the folders we want to ignore
  const filesInFoldersToIgnores = await globby(FOLDERS_TO_IGNORES);

  // Path of the latest Qiskit release note
  const pathLastestQiskitReleaseNote = await lastestQiskitReleaseNote();

  for (let filePath of filePaths) {
    const source = await readFile(filePath, { encoding: "utf8" });
    const markdown =
      path.extname(filePath) === ".ipynb"
        ? markdownFromNotebook(source)
        : source;
    const anchors = markdownLinkExtractor(markdown).anchors;

    // Get the anchors from HTML ids.
    const id_anchors = markdown.match(/(?<=id=")(.*)(?=")/gm);
    if (id_anchors != null) {
      id_anchors.forEach((id) => anchors.push("#" + id));
    }

    fileList.push(new File(filePath, anchors, false));

    // Files to ignore
    if (
      filePath in FILES_TO_IGNORES &&
      FILES_TO_IGNORES[filePath].includes("*")
    ) {
      continue;
    }

    if (filesInFoldersToIgnores.includes(filePath)) {
      continue;
    }

    if (
      !args["qiskit-release-notes"] &&
      filePath != pathLastestQiskitReleaseNote &&
      filePath.startsWith("docs/api/qiskit/release-notes/")
    ) {
      continue;
    }

    unified()
      .use(rehypeParse)
      .use(remarkGfm)
      .use(rehypeRemark)
      .use(() => {
        return function transform(tree: Root) {
          visit(tree, "text", (TreeNode) => {
            markdownLinkExtractor(String(TreeNode.value)).links.map(
              (url: string) => {
                let link = linkMap.get(url);
                if (link != null) {
                  link.push(filePath);
                } else {
                  linkMap.set(url, [filePath]);
                }
              },
            );
          });
          visit(tree, "link", (TreeNode) => {
            let link = linkMap.get(TreeNode.url);
            if (link != null) {
              link.push(filePath);
            } else {
              linkMap.set(TreeNode.url, [filePath]);
            }
          });
          visit(tree, "image", (TreeNode) => {
            let link = linkMap.get(TreeNode.url);
            if (link != null) {
              link.push(filePath);
            } else {
              linkMap.set(TreeNode.url, [filePath]);
            }
          });
        };
      })
      .use(remarkStringify)
      .process(markdown);
  }

  for (let [linkPath, originFiles] of linkMap) {
    originFiles = originFiles.filter(
      (originFile) =>
        FILES_TO_IGNORES[originFile] == null ||
        !FILES_TO_IGNORES[originFile].includes(linkPath),
    );

    if (originFiles.length > 0) {
      const link = new Link(linkPath, originFiles);
      link.isExternal
        ? externalLinkList.push(link)
        : internalLinkList.push(link);
    }
  }

  return [fileList, internalLinkList, externalLinkList];
}

async function main() {
  const args = readArgs();

  // Determine what files with links we want to parse
  const pathsWithLinks = await globby("docs/**/*.{ipynb,md,mdx}");

  // Parse the files with links and get a list with all the links
  // in all the files without duplications.
  const [docsFiles, internalLinkList, externalLinkList] =
    await loadFilesAndLinks(pathsWithLinks);

  // Define extra files that we don't want to parse
  const otherFiles = [
    ...(await globby("{public,docs}/**/*.{png,jpg,gif,svg}")).map(
      (fp) => new File(fp, [], false),
    ),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, [], true)),
  ];

  // Create an array with all the valid destinations for a link
  const existingFiles = docsFiles.concat(otherFiles);

  // Validate internal links
  const results = await Promise.all(
    internalLinkList.map((link) => link.checkLink(existingFiles)),
  );

  // Validate external links
  // A for loop is used to reduce the risk of rate-limiting
  if (args["external"]) {
    for (let link of externalLinkList) {
      results.push(await link.checkLink(existingFiles));
    }
  }

  // Print the results
  let allGood = true;
  results.forEach((linkErrors) => {
    linkErrors.forEach((errorMessage) => {
      console.error(errorMessage);
      allGood = false;
    });
  });

  if (!allGood) {
    console.error("\nSome links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo links appear broken ✅\n");
}

main().then(() => process.exit());
