async function fetchAllFiles(prNumber: number): Promise<string[]> {
  const results: string[] = [];
  let cursor: string | null = null;

  while (true) {
    const response = await fetch(`https://api.github.com/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        query: `
          query($pr: Int!, $cursor: String) {
            repository(owner: "Qiskit", name: "documentation") {
              pullRequest(number: $pr) {
                files(first: 100, after: $cursor) {
                  nodes {
                    path
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                }
              }
            }
          }
        `,
        variables: {
          pr: prNumber,
          cursor,
        },
      }),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to fetch changed files: ${error}`);
    }

    const { data } = await response.json();
    const files = data.repository.pullRequest.files;
    results.push(...files.nodes.map((n: { path: string }) => n.path));

    if (!files.pageInfo.hasNextPage) {
      break;
    }
    cursor = files.pageInfo.endCursor;
  }

  return results;
}

async function main(): Promise<void> {
  const prNumber = process.argv[2];
  if (!prNumber) {
    throw new Error("Must set the PR number as the first argument.");
  }

  const changed = await fetchAllFiles(Number(prNumber));
  console.log(changed.join("\n"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
