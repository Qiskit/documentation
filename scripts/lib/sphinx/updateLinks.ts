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

import { initial, keyBy, keys, last } from 'lodash';
import { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import isAbsoluteUrl from 'is-absolute-url';
import { removePart, removePrefix } from '../stringUtils';
import { SphinxToMdResultWithUrl } from './SphinxToMdResult';
import { remarkStringifyOptions } from './unifiedParser';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';

export async function updateLinks<T extends SphinxToMdResultWithUrl>(
  results: T[],
  transformLink?: (url: string, text?: string) => { url: string; text?: string } | undefined
): Promise<T[]> {
  const resultsByName = keyBy(results, (result) => result.meta.python_api_name!);
  const itemNames = new Set(keys(resultsByName));

  for (const result of results) {
    const output = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkMdx)
      .use(() => {
        return async (tree: Root) => {
          visit(tree, 'link', (node) => {
            if (transformLink) {
              const textNode = node.children?.[0]?.type === 'text' ? node.children?.[0] : undefined;
              const transformedLink = transformLink(node.url, textNode?.value);
              if (transformedLink) {
                node.url = transformedLink.url;
                if (textNode && transformedLink.text) {
                  textNode.value = transformedLink.text;
                }
                return;
              }
            }

            if (isAbsoluteUrl(node.url)) return;
            if (node.url.startsWith('/')) return;

            node.url = removePart(node.url, '/', ['stubs', 'apidocs', 'apidoc', '..']);

            const urlParts = node.url.split('/');
            const initialUrlParts = initial(urlParts);
            const [path, hash] = last(urlParts)!.split('#') as [string, string | undefined];

            // qiskit_ibm_runtime.RuntimeJob
            // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob
            if (itemNames.has(path)) {
              if (hash === path) {
                node.url = [...initialUrlParts, path].join('/');
                return;
              }

              // qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.job -> qiskit_ibm_runtime.RuntimeJob#job
              if (hash?.startsWith(`${path}.`)) {
                const member = removePrefix(hash, `${path}.`);
                node.url = [...initialUrlParts, path].join('/') + `#${member}`;
                return;
              }
            }

            // qiskit_ibm_runtime.QiskitRuntimeService.job -> qiskit_ibm_runtime.QiskitRuntimeService#job
            const pathParts = path.split('.');
            const member = last(pathParts);
            const initialPathParts = initial(pathParts);
            const parentName = initialPathParts.join('.');
            if ('class' === resultsByName[parentName]?.meta.python_api_type) {
              node.url = [...initialUrlParts, parentName].join('/') + '#' + member;
            }
          });
        };
      })
      .use(remarkStringify, remarkStringifyOptions)
      .process(result.markdown);

    result.markdown = output?.toString();
  }

  return results;
}
