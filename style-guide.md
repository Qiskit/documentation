# Writing for IBM Quantum: Common IBM Style "gotchas"

Refer to:

- The [README](./README.md) for how to set up the project and run quality checks.
- Our [MDX guide](./mdx-guide.md) for how to write documentation and use our variant of markdown.

The following IBM Style guidelines highlight grammatical and stylistic situations that frequently appear in IBM Quantum content.

> [!TIP]
> If you are writing a piece of technical documentation - for example, authoring a guide for the IBM Quantum Platform docs - note that technical writing avoids conversational language because it must be translatable, accessible, usable by AI, and understood by a variety of audiences. Effective technical writing is direct, bland, and bossy! (And that's ok!) Feel free to contact @abbycross or @beckykd about these guidelines or any other style questions.

IBM Quantum content follows IBM style guidelines, which include rules for ensuring clear translation, correct terminology usage, accessibility, and general guidelines that helps all IBM content have the same look and feel. An added bonus when you follow these guidelines is that the text is easier for AI to "understand" and use.

## Titles and headers

- Titles and headers should use "Sentence case" (first letter of the first word is capitalized; the rest lower-case) as opposed to "Camel Case" (where each word is capitalized)
- Avoid using -ing in titles/headers wherever possible; instead, use direct action-oriented language. For example, rather than 'Testing circuits', use 'Test circuits'

## Tense and voice

- Avoid first-person (I, we, us); use second-person instead (you -- whether explicit or understood)
- Choose active voice over passive voice (for example, "The Estimator primitive returns a list of values." instead of "A list of values is returned by the Estimator primitive.")
- Avoid future tense as well as future perfect tense (for example, ask yourself any time you use the word "will" if you really need it)

## Lists

- When using bullet points or numbered lists, capitalize the first letter of the first word of each item
- Use a period at the end of each item, or none of them (and be consistent within your document)
- Do not introduce a list with a sentence fragment and complete the sentence in the list items. For example, do not write the following:
  I went to the store and bought
  - Milk
  - Eggs

## Style and specific word usage

- Use American English spelling when it differs from British English
- Simple words are clearest. For example, "use" rather than "utilize", or "run" rather than "execute"
- Use the serial (or Oxford) comma in a series of items ("I invited my parents, the hippo, and the giraffe" rather than "I invited my parents, the hippo and the giraffe")
- Do not use Latin abbreviations i.e., e.g., etc., and vs. Use alternative wording instead: "that is," "for example," "and so on," or "versus"
- Do not use "please"
- The word "which" in most cases is preceded by a comma; the word "that" (in a similar context) is not preceded by a comma ("The ice cream sandwich, which had melted, was a sticky mess" or "The ice cream sandwich that had melted was a sticky mess")
- Do not use "may" - rather, use "can" or "might" depending on context
- Avoid using "above" and "below" when referring to software versions/fix levels; instead, use "earlier" and "later". Also avoid "above" and "below" to indicate the location of content within a page. Instead, use "preceding" or "previous" and "later"
- Avoid anthropomorphizing or stating that inanimate objects grant abilities to people, as in “the product lets you / allows you / enables you to…” or "the software understands/hopes/believes...". Whenever possible, use a direct, user-focused alternative such as “you can use the product to…” or “with this product, users can…”
- Use DD Monthname YYYY to format dates (note no comma after the month); for example, '13 February 2024'

## Translation and accessibility concerns

- "and/or" is very hard to translate, so do not use
- Don't rely only on color to describe something. Instead, use at least one other way (thickness, pattern, and so forth) to distinguish an item

## Proper marking and attribution

**All information needs to identify, mark, and attribute IBM and applicable third-party trademarks.** We do this the first time an IBM trademark appears on each page. See the [Copyright and trademark information](https://www.ibm.com/legal/copyright-trademark) page for more details.

Some companies require a special attribution notice. View a list of the companies to include in a special attribution notice at the [Special attributions](https://www.ibm.com/legal/copyright-trademark#special) section of the IBM Legal site.

Refer to [the MDX guide](./mdx-guide.md#trademark-symbols) for how to add the symbols to markdown.

<details>
<summary>A (non-exhaustive) list of trademarked names found in our docs:</summary>

- IBM&reg;
- IBM Cloud&reg;
- IBM Quantum&reg;
</details>

**Note**: Although Qiskit is a registered trademark of IBM, we do not mark it as such.

See the Usage section of the IBM Quantum Experience Guide for guidance on when to use IBM and when to use IBM Quantum.
