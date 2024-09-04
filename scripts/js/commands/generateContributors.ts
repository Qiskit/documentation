import { $ } from "zx";
import { globby } from "globby";
import { writeFile } from "fs/promises";

type CommitHash = string;
type AuthorName = string;

const ALL_DOCS_GLOB = "docs/!(api)/**/*.{mdx,ipynb}";

function normalizeName(name: string): AuthorName | null {
  name = name.trim();
  if (name.endsWith("[bot]")) return null;
  if (name == "abbycross") return "Abby Cross";
  if (name == "SooluThomas") return "Soolu Thomas";
  if (name == "javabster") return "Abby Mitchell";
  if (name == "kaelynj") return "Kaelyn Ferris";
  if (name.match(/[\s-']/)) {
    if (!name.includes(" ")) {
      // Probably `firstname-lastname`
      name = name.replaceAll("-", " ");
    }
    // Correctly capitalize names (including double-barrelled surnames)
    name = name
      .toLowerCase()
      .replaceAll(/(?<=^|[\s-'])[^\s-']/g, (char) => char.toUpperCase());
  }
  return name;
}

async function run(
  command: TemplateStringsArray,
  ...rest: any[]
): Promise<string> {
  return (await $(command, rest)).stdout;
}

async function getCommits(filepath: string): Promise<CommitHash[]> {
  return (await run`git log --format='%h' --follow -- ${filepath}`)
    .split("\n")
    .filter((s) => s !== "");
}

async function getCommitAuthors(commit: CommitHash): Promise<AuthorName[]> {
  const commitAuthor = await run`git show --format='%an' -s ${commit}`;
  const commitMessage = await run`git show --format='%B' -s ${commit}`;
  const coAuthors = commitMessage
    .split("\n")
    .filter((line) => line.startsWith("Co-authored-by:"))
    .map((line) => line.split(" ").slice(1, -1).join(" "));
  return [commitAuthor, ...coAuthors]
    .map(normalizeName)
    .filter((name) => name !== null) as AuthorName[];
}

async function getFileAuthors(filepath: string): Promise<AuthorName[]> {
  const commits = await getCommits(filepath);
  let authors = new Set<AuthorName>();
  await Promise.all(
    commits.map(async (commit) => {
      for (const name of await getCommitAuthors(commit)) {
        authors.add(name);
      }
    }),
  );
  return [...authors].sort();
}

async function main(): Promise<void> {
  const data: any = {};
  const filepaths = await globby(ALL_DOCS_GLOB);

  await Promise.all(
    filepaths.map(async (fp) => {
      data[fp] = await getFileAuthors(fp);
    }),
  );

  console.log("Writing contributors file...");
  const stringifiedData =
    JSON.stringify(data, Object.keys(data).sort(), 2) + "\n";
  await writeFile("scripts/config/contributors.json", stringifiedData);
}

main().then(() => process.exit());
