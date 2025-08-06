import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { visit } from "unist-util-visit";
import { Root } from "mdast";
import yaml from "js-yaml";

export async function collectHeadingTitleMismatch(
  markdown: string,
): Promise<string[]> {
  const mismatches: string[] = [];
  let frontmatterTitle: string | undefined;
  let headingText: string | undefined;

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter, ["yaml"]);

  const tree = processor.parse(markdown);

  // Run the transformer manually
  visit(tree, "yaml", (node: any) => {
    const data = yaml.load(node.value);
    if (typeof data === "object" && data !== null && "title" in data) {
      frontmatterTitle = (data as any).title;
      console.log("Frontmatter title:", frontmatterTitle);
    }
  });

  visit(tree, "heading", (node: any) => {
    if (node.depth === 1 && !headingText) {
      headingText = node.children
        .filter((child: any) => child.type === "text")
        .map((child: any) => child.value)
        .join(" ");
      console.log("Heading text:", headingText);
    }
  });

  if (frontmatterTitle && headingText && frontmatterTitle !== headingText) {
    mismatches.push(
      `Mismatch: frontmatter title "${frontmatterTitle}" does not match heading "${headingText}"`,
    );
  }

  return mismatches;
}
