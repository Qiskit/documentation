type LinkExtractionResult = {
  links: string[];
  anchors: string[];
};

declare module "markdown-link-extractor" {
  function markdownLinkExtractor(string): LinkExtractionResult;
  export = markdownLinkExtractor;
}
