import { isEqual } from "lodash-es";
import { diff } from "jest-diff";

import { getDevVersion, getReleasedVersions } from "../lib/apiVersions";

async function main() {
  const [QiskitHistoricalVersions, QiskitCurrentVersion] =
    await getReleasedVersions("qiskit", false);
  const QiskitDevVersion = await getDevVersion("qiskit");
  const allQiskitVersions = [
    QiskitDevVersion,
    QiskitCurrentVersion,
    // The Qiskit package introduced the C docs in 2.0, so we filter out the versions with major < 2
    ...QiskitHistoricalVersions.filter(
      (version: string) => +version.split(".")[0] >= 2,
    ),
  ];

  const [QiskitCHistoricalVersions, QiskitCCurrentVersion] =
    await getReleasedVersions("qiskit-c", false);
  const QiskitCDevVersion = await getDevVersion("qiskit-c");
  const allQiskitCVersions = [
    QiskitCDevVersion,
    QiskitCCurrentVersion,
    ...QiskitCHistoricalVersions,
  ];

  if (!isEqual(allQiskitVersions, allQiskitCVersions)) {
    console.error(
      `❌ Out of sync versions found:\n\n` +
        diff(allQiskitVersions, allQiskitCVersions, {
          expand: false,
          contextLines: 0,
          aAnnotation: "qiskit",
          bAnnotation: "qiskit-c",
        }),
    );

    console.error(
      "\nThe qiskit and qiskit-c packages share the same artifact, but you need to run the API geneartion script for each of them in every version.",
      "\n\nFor example, to generate the v2.0.3 docs as the latest ones, you need to run two commands:",
      "\n\tnpm run gen-api -- -p qiskit -v 2.0.3",
      "\n\tnpm run gen-api -- -p qiskit-c -v 2.0.3",
      "\n\nMake sure you generated both qiskit and qiskit-c when adding or updating the API docs. Check that every version is in sync in their respective `_package.json` files!",
    );
    process.exit(1);
  }

  console.log("\nThe Qiskit and Qiskit C versions are in sync ✅\n");
}

main().then(() => process.exit());
