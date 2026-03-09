// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { $ } from "zx";
import { parse, compare } from "semver";
import { groupBy } from "lodash-es";

import { zxMain } from "../../lib/zx.js";

const SIX_MONTHS_IN_MS =
  1000 * // 1 second
  60 * // 1 minute
  60 * // 1 hour
  24 * // 1 day
  30 * // ~ 1 month
  6;

/** Extract required information from a list of version strings */
export function processVersions(rawVersions: string[]): {
  latestMajorNumber: number;
  previousMajorNumber: number;
  firstReleaseOfLatestMajor: string;
} {
  const versions = rawVersions.flatMap((s) => {
    const parsed = parse(s);
    if (!parsed) {
      console.log(`Ignoring unparsable version '${s}'`);
      return [];
    }
    return [parsed];
  });

  const versionsByMajor = groupBy(versions, (v) => v.major);
  const [latestMajorNumber, previousMajorNumber] = Object.keys(versionsByMajor)
    .map((n) => Number(n))
    .sort()
    .reverse();

  const firstReleaseOfLatestMajor =
    versionsByMajor[latestMajorNumber].sort(compare)[0].raw;

  return { latestMajorNumber, previousMajorNumber, firstReleaseOfLatestMajor };
}

zxMain(async () => {
  const qiskitData = await fetch(`https://pypi.org/pypi/qiskit/json`).then(
    (response) => response.json(),
  );

  const allVersions = Object.keys(qiskitData.releases);
  const { latestMajorNumber, previousMajorNumber, firstReleaseOfLatestMajor } =
    processVersions(allVersions);

  const latestMajorFirstReleased = new Date(
    qiskitData.releases[firstReleaseOfLatestMajor][0].upload_time,
  );

  const ageOfMajorRelease =
    new Date().getTime() - latestMajorFirstReleased.getTime();
  if (ageOfMajorRelease < SIX_MONTHS_IN_MS) {
    console.log(
      `Latest major series (v${latestMajorNumber}.x) is less than six months old (${ageOfMajorRelease}ms); exiting`,
    );
    return;
  }

  const issueTitle = `Deprecate Qiskit v${previousMajorNumber}.x in version selector`;

  const potentialMatchingIssues: { title: string }[] = JSON.parse(
    (await $`gh issue list --search ${issueTitle} --state all --json title`)
      .stdout,
  );
  const issueAlreadyExists = potentialMatchingIssues.some(
    ({ title }) => title === issueTitle,
  );
  if (issueAlreadyExists) {
    console.log(`Already found an issue with title '${issueTitle}'; exiting`);
    return;
  }

  console.log("Latest major series is over six months old, creating issue...");
  const issueBody = `Qiskit v${firstReleaseOfLatestMajor} was released over six months ago. The previous major series (v${previousMajorNumber}.x) should be demoted from "Stable" to "Deprecated" in the version selector.`;
  await $`gh issue create --title ${issueTitle} --body ${issueBody} --assignee frankharkins,arnaucasau --label 'infra 🏗️,needs triage 🤔'`;
});
