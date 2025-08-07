import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { visit } from "unist-util-visit";
import { Root } from "mdast";
import yaml from "js-yaml";

// Helper to recursively extract visible text from heading node
function extractText(node: any): string {
  if (node.type === "text" || node.type === "inlineCode") {
    return node.value;
  }

  if (node.type === "link" && node.children) {
    return node.children.map(extractText).join(" ");
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractText).join(" ");
  }

  return "";
}

export async function collectHeadingTitleMismatch(
  markdown: string,
): Promise<string[]> {
  const mismatches = new Set<string>();

  let frontmatterTitle: string | undefined;
  let headingText: string | undefined;

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter, ["yaml"]);

  const tree = processor.parse(markdown);

  // Extract frontmatter title
  visit(tree, "yaml", (node: any) => {
    const data = yaml.load(node.value);
    if (typeof data === "object" && data !== null && "title" in data) {
      frontmatterTitle = (data as any).title;
    }
  });

  // Extract first level-1 heading with full formatting
  visit(tree, "heading", (node: any) => {
    if (node.depth === 1 && !headingText) {
      headingText = extractText(node).trim();
    }
  });

  // Compare and collect mismatch
  if (frontmatterTitle && headingText && frontmatterTitle !== headingText) {
    mismatches.add(
      `Mismatch: frontmatter title "${frontmatterTitle}" does not match heading "${headingText}"`,
    );
  }

  return Array.from(mismatches);
}

