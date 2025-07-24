import { TocEntry } from "./api/generateToc.js";
export interface NewPillEntry {
  toc: string;
  url: string;
  date: string | null;
}
export function collectNewPills(
  entries: TocEntry[],
  tocPath: string,
): NewPillEntry[] {
  const newPillEntries = [];
  for (const entry of entries) {
    if ("children" in entry) {
      const childEntries = collectNewPills(entry.children || [], tocPath);
      newPillEntries.push(...childEntries);
    }
    if (entry.isNew) {
      newPillEntries.push({
        toc: tocPath,
        url: entry.url ?? entry.title,
        date: entry.isNewDate ?? null,
      });
    }
  }
  return newPillEntries;
}
