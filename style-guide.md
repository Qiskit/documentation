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

- Avoid first-person (I, we, us); use second-person instead (you -- whether explicit or understood) EXCEPTION: it is often acceptable to use "we" in Learning content (anything in the `learning/` directory)
- Choose active voice over passive voice (for example, "The Estimator primitive returns a list of values." instead of "A list of values is returned by the Estimator primitive.")
- Avoid future tense as well as future perfect tense (for example, ask yourself any time you use the word "will" if you really need it)
- When a gerund phrase is the subject of a sentence, rewrite it as a second-person clause. For example, use "To write that as an operator, you must choose..." instead of "Writing that as an operator requires a choice...", or "If you run the pass again, nothing changes" instead of "Running the pass again does nothing." A noun can also work: "A bound on the occupation is not enough" instead of "Bounding the occupation is not enough."
  - Exception: keep a gerund that names a technical operation, where a rewrite would change the meaning (for example, "Mapping does not commute with normal ordering").

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
- Use bold and italics only on nouns, or to introduce a term the first time it appears (for example, "pick a **truncation** _d_"). Do not use them on adjectives, adverbs, verbs, conjunctions, prepositions, or whole sentences ("does **not** commute," "on _both_ axes"). Exception: bold lead-in sentences in a summary list are acceptable, because they help readers scan the list.
- Remove "here," "now," and similar pointing words when the sentence is complete without them ("so nothing here is specific to a chain" becomes "so nothing is specific to a chain"). Keep the word when it is the grammatical subject ("Here is the result") or when a contrast needs it ("They agree here, but differ away from it").
- Do not start a sentence with "And," "But," "So," or "Or." Join the sentence to the previous one, or use a transition such as "however," "therefore," or "also."

## Translation and accessibility concerns

- "and/or" is very hard to translate, so do not use
- Don't rely only on color to describe something. Instead, use at least one other way (thickness, pattern, and so forth) to distinguish an item

### Word choices that affect machine translation

Much of our content is machine-translated, and some English constructions translate poorly or ambiguously. Prefer the clearer option in each case:

- Keep "that" and "which" explicit. For example, "the circuit that you built" translates more reliably than "the circuit you built".
- Avoid idioms, colloquialisms, and metaphors (for example, "out of the box", "under the hood", "a handful of"). Use literal wording.
- Keep pronoun references unambiguous. If "it" or "they" could point to more than one preceding noun, repeat the noun instead.
- Avoid "once" to mean "after"; use "after" so it is not read as "one time".
- Avoid "since" or "as" to mean "because"; use "because".
- Do not use slashes to join words (for example, "input/output", "client/server"); spell out the relationship or use the full term on first use.
- Keep sentences short and in a single clause where possible. Long, multi-clause sentences compound translation errors.
- Avoid phrasal verbs when a single verb exists. For example, use "submit" rather than "send in", or "omit" rather than "leave out".
- Avoid words that are both a noun and a verb without a clear signal of which you mean. For example, "Request access" (verb) versus "Submit a request" (noun). Add an article or restructure so the part of speech is unambiguous.
- Avoid long strings of stacked nouns; the relationship between them is lost in translation. For example, use "the configuration file for the backend" rather than "the backend configuration file" when the grouping is ambiguous.

## Gotchas in AI-generated content ("Claude, de-clawed")

If text is supplemented or edited by an AI, look out for some of these signature content patterns, to consider whether they are overused and should be removed or rewritten for the final version:

- Abundance of semicolons, colons, or em-dashes
- An incomplete phrase before a list without a colon or other punctuation beforehand (this is also confusing to machine translation)
- Repetitive mention of what previous sections did and what future sections will do (especially when previous section summaries already made similar references)
- Starting sentences with a gerund (a word ending in -ing)
- Over-explaining, over-justification, and unneeded comparisons; look out for clauses that start with (for example) "rather than" or "the point is" and consider whether they add true value to the intention
- Unnecessary (and potentially confusing) synonyms for terms; for example, in an attempt not to overuse the often-repeated phrase "IBM Quantum Roadmap", the content contained "the IBM proposal", which wasn't a helpful substitution
- Overuse of words like "precisely" or "exactly" when the phrase doesn't require the emphasis
- Extra words in phrases like "This is the (noun) that does (verb)" rather than simply saying "Noun does verb"

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

See the Usage section of the (internal-only) IBM Quantum Experience Guide for guidance on when to use IBM and when to use IBM Quantum.
