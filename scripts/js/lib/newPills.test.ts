import { expect, test } from "@playwright/test";
import { collectNewPills } from "./newPills";
import { TocEntry } from "./api/generateToc.js";
test("collectNewPills()", () => {
  const input: TocEntry[] = [
    {
      title: "Root-level page 1",
      url: "/page-1",
      isNew: "true",
      isNewDate: "2025-07-20",
    },
    {
      title: "Root-level page 2",
      url: "/page-2",
    },
    {
      title: "Root-level folder 1",
      isNew: "true",
      isNewDate: "2025-06-18",
      children: [
        {
          title: "Child page 1",
          url: "/folder-1/page-1",
        },
        {
          title: "Child page 2",
          url: "/folder-1/page-2",
          isNew: "true",
          isNewDate: "2025-07-21",
        },
      ],
    },
    {
      title: "Root-level folder 2",
      children: [
        {
          title: "Child page 3",
          url: "/folder-2/page-3",
        },
      ],
    },
  ];
  const input2: TocEntry[] = [
    {
      title: "Root-level page 1",
      url: "input2/page-1",
      isNew: "true",
    },
  ];
  const input3: TocEntry[] = [
    {
      title: "folder-parent-1",
      isNew: "true",
      isNewDate: "2025-07-21",
      children: [
        {
          title: "child-1",
          isNew: "true",
          isNewDate: "2025-07-21",
          children: [
            {
              title: "child-1.1",
              url: "/child-1.1",
              isNew: "true",
            },
          ],
        },
      ],
    },
  ];
  const mockPath = "/fake/path/to/toc.json";
  expect(collectNewPills(input, mockPath)).toEqual([
    {
      identifier: "/page-1",
      toc: mockPath,
      date: "2025-07-20",
    },
    {
      identifier: "/folder-1/page-2",
      toc: mockPath,
      date: "2025-07-21",
    },
    { toc: mockPath, date: "2025-06-18", identifier: "Root-level folder 1" },
  ]);
  expect(collectNewPills(input2, mockPath)).toEqual([
    {
      toc: mockPath,
      identifier: "input2/page-1",
      date: null,
    },
  ]);
  expect(collectNewPills(input3, mockPath)).toEqual([
    {
      toc: mockPath,
      identifier: "/child-1.1",
      date: null,
    },
    {
      toc: mockPath,
      identifier: "child-1",
      date: "2025-07-21",
    },
    {
      toc: mockPath,
      identifier: "folder-parent-1",
      date: "2025-07-21",
    },
  ]);
});
