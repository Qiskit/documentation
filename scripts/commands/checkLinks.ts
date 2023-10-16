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
const { existsSync, readFileSync } = require('fs');
const path = require('node:path')
const markdownLinkExtractor = require('markdown-link-extractor');

DOCS_ROOT = "./docs"
CONTENT_FILE_EXTENSIONS = [".md", ".mdx", ".ipynb"]

class Link {
  value: string
  anchor: string
  origin: string
  isExternal: boolean

  constructor(linkString: string, origin: string) {
    /* 
     * linkString: Link as it appears in source file
     *     origin: Path to source file containing link
     */

    const splitLink = linkString.split('#', 1)
    this.value = splitLink[0]
    this.anchor = (splitLink.length > 1) ? `#${splitLink[1]}` : ''
    this.origin = origin
    this.isExternal = linkString.startsWith("http")
  }

  resolve(): string[] {
    /*
     * Return list of possible paths link could resolve to
     */

    // Handle external and non-text content first
    if ( this.isExternal ) { return [ this.value ] }
    if ( this.value === '' ) { return [ this.origin ] }
    if ( this.value.startsWith("/images") ) {
      return [ path.join("public/", this.value) ]
    }

    // Resolve relative and absolute links
    let baseFilePath
    if (this.value.startsWith('/')) {
      // Path is relative to DOCS_ROOT
      baseFilePath = path.join(DOCS_ROOT, this.value)
    } else {
      // Path is relative to origin file
      baseFilePath = path.join(
        path.dirname(this.origin),
        this.value
      )
    }
    // Remove trailing '/' from path.join
    baseFilePath = baseFilePath.replace(/\/$/gm, '')

    // File have one of many extensions(.md, .ipynb etc.), and/or be directory
    // with an index file (for example, docs/build should resolve to
    // docs/build/index.mdx); we return a list of pll ossible filenames.
    let possibleFilePaths = []
    for (let index of ['', '/index']) {
      for (let extension of CONTENT_FILE_EXTENSIONS) {
        possibleFilePaths.push(
            baseFilePath + index + extension
        )
      }
    }
    return possibleFilePaths
  }

  check(): boolean {
    /*
     * True if link points to existing file, otherwise false
     */
    if (this.isExternal) {
      // External link checking not supported yet
      return true
    }

    for (let filePath of this.resolve()) {
      if (existsSync(filePath)) {
        return true
      }
    }

    console.log(`❌ ${this.origin}: Could not find link '${this.value}'`)
    return false
  }
}

function markdownFromNotebook(source: string): string {
  let markdown = ''
  for (let cell of JSON.parse(source).cells) {
    if (cell.source === 'markdown') {
      markdown += cell.source
    }
  }
  return markdown
}

function checkLinksInFile(filePath: string): boolean {
  const source = readFileSync(filePath, {encoding: 'utf8'})
  const markdown = (path.extname(filePath) === '.ipynb') ? markdownFromNotebook(source) : source
  const links = markdownLinkExtractor(source).links.map(x => new Link(x, filePath))

  let allGood = true
  for (let link of links) {
    allGood = link.check() && allGood
  }
  return allGood
}

async function main() {
  const filePaths = await globby('docs/**/*.{ipynb,md,mdx}')
  let allGood = true
  for (let sourceFile of filePaths) {
    allGood = checkLinksInFile(sourceFile) && allGood
  }
  if (!allGood) {
    console.log("\nSome links appear broken 💔\n")
    process.exit(1)
  }
}

main()
