import path from "node:path";
import levenshtein from "fast-levenshtein";

const DOCS_ROOT = "./";
const CONTENT_FILE_EXTENSIONS = [".mdx", ".ipynb"];

export class File {
  readonly path: string;
  readonly anchors: Set<string>;
  readonly synthetic: boolean;

  constructor(path: string, anchors: Set<string>, synthetic: boolean = false) {
    this.path = path;
    this.anchors = anchors;
    this.synthetic = synthetic;
  }
}

export class InternalLink {
  readonly value: string;
  readonly anchor: string;
  readonly originFiles: Set<string>;

  constructor(linkString: string, originFiles: string[]) {
    if (linkString.startsWith("http")) {
      throw new Error(
        `Invalid InternalLink, cannot start with 'http': ${linkString}`,
      );
    }

    // ✅ Normalize backslashes and strip query parameters
    linkString = linkString.replace(/\\/g, "/").split("?")[0];

    const splitLink = linkString.split("#", 2);
    this.value = splitLink[0];
    this.anchor = splitLink.length > 1 ? `#${splitLink[1]}` : "";
    this.originFiles = new Set(originFiles);
  }

  possibleFilePaths(originFile: string): string[] {
    if (this.value === "") {
      return [originFile];
    }

    if (
      this.value.startsWith("/docs/images") ||
      this.value.startsWith("/docs/videos") ||
      this.value.startsWith("/learning/images") ||
      this.value.startsWith("/learning/videos") ||
      this.value.endsWith(".pdf")
    ) {
      return [path.join("public/", this.value)];
    }

    const relativeToFolder = this.value.startsWith("/")
      ? DOCS_ROOT
      : path.dirname(originFile);

    const baseFilePath = path
      .join(relativeToFolder, this.value)
      .replace(/\/$/gm, "");

    let possibleFilePaths = [];
    for (let index of ["", "/index"]) {
      for (let extension of CONTENT_FILE_EXTENSIONS) {
        possibleFilePaths.push(baseFilePath + index + extension);
      }
    }
    return possibleFilePaths;
  }

  isValid(existingFiles: File[], originFile: string): boolean {
    const possiblePaths = this.possibleFilePaths(originFile);

    //  Treat links to "/", "/index", "./", "./index" as always valid
    const normalized = this.value.replace(/\/$/, "");
    if (
      normalized === "" ||
      normalized === "." ||
      normalized === "index" ||
      normalized === "./index"
    ) {
      return true;
    }

    return possiblePaths.some((filePath) =>
      existingFiles.some(
        (existingFile) =>
          existingFile.path == filePath &&
          (this.anchor == "" ||
            existingFile.synthetic == true ||
            existingFile.anchors.has(this.anchor)),
      ),
    );
  }

  didYouMean(existingFiles: File[]): string | null {
    const MIN_SIMILARITY = 0.5;
    let minScoreLink = Number.MAX_SAFE_INTEGER;
    let suggestionPath: string = "";
    let suggestionPathAnchors: string[] = [];

    existingFiles.forEach((file) => {
      const filePath = `/${file.path}`;
      const candidatePath = filePath.match(/^\/public\//)
        ? filePath.replace(/^\/public/, "")
        : filePath.replace(/\.[^\/.]+$/, "");

      const score = levenshtein.get(this.value, candidatePath);
      if (score < minScoreLink) {
        minScoreLink = score;
        suggestionPath = candidatePath;
        suggestionPathAnchors = Array.from(file.anchors);
      }
    });

    const lengthLongestPath = Math.max(this.value.length, suggestionPath.length);
    const scoreLinkNormalized = 1 - minScoreLink / lengthLongestPath;

    if (scoreLinkNormalized < MIN_SIMILARITY) {
      return null;
    }

    if (this.anchor === "") {
      return `❓ Did you mean '${suggestionPath}'?`;
    }

    let minScoreAnchor = Number.MAX_SAFE_INTEGER;
    let suggestionAnchor: string = "";

    suggestionPathAnchors.forEach((anchor) => {
      const score = levenshtein.get(this.anchor, anchor);
      if (score < minScoreAnchor) {
        minScoreAnchor = score;
        suggestionAnchor = anchor;
      }
    });

    const lengthLongestAnchor = Math.max(this.anchor.length, suggestionAnchor.length);
    const scoreAnchorNormalized = 1 - minScoreAnchor / lengthLongestAnchor;

    if (scoreAnchorNormalized < MIN_SIMILARITY) {
      return null;
    }

    return `❓ Did you mean '${suggestionPath}${suggestionAnchor}'?`;
  }

  check(existingFiles: File[]): string | undefined {
    const failingFiles: string[] = [];

    this.originFiles.forEach((originFile) => {
      if (this.isValid(existingFiles, originFile)) {
        return;
      }
      const resultSuggestion = this.didYouMean(existingFiles);
      const suggestedPath = resultSuggestion ? `    ${resultSuggestion}` : "";
      failingFiles.push(`    ${originFile}${suggestedPath}`);
    });

    return failingFiles.length === 0
      ? undefined
      : `❌ Could not find link '${this.value}${this.anchor}'. Appears in:\n${failingFiles.sort().join("\n")}`;
  }
}
