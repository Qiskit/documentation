import { TocEntry } from "./api/generateToc.js";
export interface NewPillEntry {
  toc: string;
  url: string;
  date: string | null;
}
export function collectNewPills(entries: TocEntry[], tocPath: string): NewPillEntry[] {
  const newPillEntries = [];
  for (const entry of entries) {
    if ("children" in entry) {
      const childEntries = collectNewPills(entry.children || [], tocPath);
      newPillEntries.push(...childEntries);
    } else if (entry.isNew && entry.url) {
      if (entry.isNewDate) {
        newPillEntries.push({
          toc: tocPath,
          url: entry.url,
          date: entry.isNewDate,
        });
      } else {
        newPillEntries.push({ toc: tocPath, url: entry.url, date: null });
      }
    }
  }
  return newPillEntries;
}


