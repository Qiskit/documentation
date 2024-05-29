// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

// Like keyof but can only be string (not number or Symbol)
// From https://stackoverflow.com/a/65420892
export type StringKeyOf<T extends object> = Extract<keyof T, string>;

// To extract type of array
// From https://stackoverflow.com/a/52331580
export type ElementType<T extends any[]> = T extends (infer U)[] ? U : never;

export interface LearningApiSchema {
  tutorials: Tutorial[];
  tutorials_translations: Translation[];
  tutorials_topics: Topic[];
  tutorials_categories: Category[];
  tutorials_tutorials_topics: TutorialsTopicsRelation[];
}

interface Tutorial {
  id: string;
  slug: string;
  status: "draft" | "published" | "archived";
  reading_time: number;
  category: string; // This is the uuid of the category.
  catalog_featured: boolean;
  translations: number[] | Translation[];
}

interface Translation {
  id: number;
  title: string;
  short_description: string;
  content: string;
  languages_code: string;
  temporal_file: string | null;
}

interface Topic {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface TutorialsTopicsRelation {
  id: number;
  tutorials_id: string | Tutorial;
  tutorials_topics_id: string | Topic;
}
