# Tutorials with Qiskit Functions | Creation Guidelines

## Guidelines introduction
Thank you for supporting the quantum community by creating tutorials to demonstrate to others how to leverage your software for research and industry use cases by using Qiskit Functions. 

This document helps you create tutorials aligned with the current IBM Quantum documentation standards. 

## Set a common ground

### What is a tutorial

A tutorial is a short, code-driven demonstration of a workflow example of a specific capability in the IBM Quantum stack. In this case, we expect your tutorial to demonstrate how to leverage your software through Qiskit Functions for research and industry use cases. Ideally, tutorials should:

* Not be an exhaustive exploration into theory.  Instead, add links to courses or external documents (e.g., ArXiV).
* Be factual, rather than opinionated: They should demonstrate how to use our software tools effectively to perform a workflow or a task, rather than solely document the availability of a capability.  It should, however, link to the tool's documentation.
* Answer the question "Why should I use this?" and demonstrate a solid motivation to adopt the technique shown.

### What are Qiskit Functions
Qiskit Functions are abstracted services designed to accelerate quantum development. These are managed, utility-scale services that will unlock new quantum users.

There are two types of Qiskit Functions:
* Circuit Functions: Enable quantum computational scientists to discover new algorithms and applications, without needing to manage transpilation, error suppression, or error mitigation.
* Application Functions: Enable data scientists and enterprise developers to integrate quantum into industry workflows, while leveraging familiar domain abstractions.

## Tutorial file structure

Download the tutorial template file: "Functions_Tutorial_Template.ipnyb" and store it in a local file. 

Tutorials are end-to-end workflows of utility-grade experiments illustrating how to apply your software through Qiskit Functions to a specific use case. Each tutorial needs to integrate the following sections:

### 1. Title 
Create a brief title. The naming should be related to the *workflow topic* only and not the tools, e.g., 

* Variational quantum eigensolver
* Quantum approximate optimization algorith
* CHSH inequality

You can find further title examples on the IBM Quantum Learning [Tutorials index page](https://quantum.cloud.ibm.com/docs/en/tutorials).

Considerations:
*  Avoid using gerund verb forms (verbs that end in 'ing', such as "running") in titles to keep it action oriented.

### 2. Usage estimate
Provide an estimated runtime (in minutes). Run on a couple of quantum computers, then share the machine name and time it took to run on each of them. The usage estimate needs to be in italics with the following format:
*Usage estimate: "x" minutes on ibm_y" or "x" minutes on ibm_z. (NOTE: This is an estimate only. Your runtime may vary.)*

### 3. Background
Provide an introductory description of the tutorial.  This introduction should:
* Explain clearly what the rationale for this tutorial is, what will this enable users to do, and how.   
* Describe the technology, algorithms, and/or functions the tutorial will cover. 

### 4. Requirements
List the technology/tools required to be able to run the tutorial, as well as Python code instructions  to install the package or tool:
* e.g., "Qiskit SDK 1.0 or later, with visualization support \(pip install 'qiskit\[visualization]").
You can also use this section to list any educational prerequisites required to run the tutorial.

### 5. Setup
Share the code instructions to import the tools/functions required to run the tutorial.

### 6. Steps
Structure the content in a four-step format as follows:
- Step 1: Map classical inputs to a quantum problem
- Step 2: Optimize the problem for quantum hardware execution
- Step 3: Execute using the Qiskit primitives
- Step 4: Post-process and return result to desired classical format

### 7. Appendix
Add any theoretical details that are needed to understand the material.

### 8. References
Add references to articles and other publications with this format: Authors, Title, Journal

### 9. Tutorial survey
All tutorials require a unique survey for learners to provide feedback. This section appears at the end of the tutorial and it is coded as follows. The IBM Quantum Learning team will create the survey before publishing your tutorial and will update the survey URL from the code below.

The education team completes this step. All you need to do is add the component below:

```markdown
## Tutorial survey

Please take a minute to provide feedback on this tutorial. Your insights will help us improve our content offerings and user experience.

[Link to survey](https://your.feedback.ibm.com/jfe/form/SV_3BLFkNVEuh0QBWm)
```

## Important considerations

### Instructional design considerations
* Scaffolded tutorials: Start describing the topics and increase complexity gradually if that is required.
* Include diverse types of content to enrich the mechanisms by which learners access content: Illustrations, infographics, diagrams, plots, etc., if they add to the content explanation. 
* Write as clearly and concisely as possible, and explain the content for every step of the tutorial, providing enough context and information for the intended audience.

### Technical considerations

* We aim for utility.  Thus, tutorials should use at least 30 qubits.
* Create files as Python notebooks with the extension .ipynb.
* Use code cells for code.
* Refer to the [README](README.md) for instructions to write the notebook and run quality checks.
* File size should be less than 4.5 MB.

#### Syntax for instantiating a backend
For quality assurance, all hardware backends should be instantiated by using the same syntax.  Currently, backends should be instantiated by using the `least_busy` method of the `QiskitRuntimeService` object. Therefore, to select a backend use the following code:

```python
backend  = QiskitRuntimeService.least_busy(operational=True, simulator=False)
```

#### Syntax for adding references
You can add a reference in two ways:
* Use in-text links to our documentation or other IBM Quantum assets.
* Use the "References" section for publications.

The References section should look like this, near the bottom of the file:

```markdown
## References


[1] Peng, T., Harrow, A. W., Ozols, M., & Wu, X. (2020). Simulating large quantum circuits on a small quantum computer. Physical review letters, 125(15), 150504.
```

Links to references inside your tutorial should look like this `[\\[1\\]](#references)`.

### Other

* Feel free to add as many markdown and Python blocks as required when using the template. 

Thank you for your contributions to IBM Quantum Learning Tutorials, and we hope you enjoy the tutorial creation process!

## Ready to create the tutorial?
* First, make a copy of the file "Functions_Tutorial_Template.ipnyb" and store it in a local file. 
* Follow the guidelines provided in this document and the [README](README.md) to ensure the tutorial you create aligns with IBM Quantum tutorial standards. 
* If any questions arise, please reach out to your IBM representative.
* When your tutorial is ready, share it with your IBM representatives by opening a pull request in this repository.

## Appendix 1 - Checklist for tutorial creation

Use this checklist to ensure your tutorial meets high quality standards, maintains consistency, and effectively supports learners.  

### 1. General considerations
- [ ] Clearly defines the purpose of the tutorial.
- [ ] Is code-driven, focusing on a workflow example rather than a theoretical exploration.
- [ ] Demonstrates how to leverage Qiskit Functions for research and industry use cases.
- [ ] Provides motivation, explaining why the technique is useful.
- [ ] Includes a practical application example.
- [ ] References appropriate IBM Quantum documentation and resources.

### 2. Structural requirements

#### 2.1 Title & usage estimate
- [ ] Provides a clear and descriptive title.
- [ ] Includes an estimated runtime (e.g., "X minutes on ibm_xyz").

#### 2.2 Background
- [ ] Introduces the tutorial’s context and purpose.
- [ ] Clearly states what users will learn and achieve.
- [ ] Describes the technology, algorithms, or functions covered.

#### 2.3 Requirements
- [ ] Lists all necessary software dependencies (e.g., Qiskit version).
- [ ] Provides installation instructions if required.

#### 2.4 Setup
- [ ] Provides code instructions to import the necessary tools.
- [ ] Defines any helper functions or initializations.

#### 2.5 Step-by-step execution
- [ ] Uses standardized step titles as required by IBM Quantum guidelines.
- [ ] Includes clear explanations for each step.
- [ ] Uses code comments to clarify complex logic.

#### 2.6 Results & interpretation
- [ ] Includes visualizations or outputs where applicable.
- [ ] Explains how to interpret the results.

#### 2.7 Summary & next steps
- [ ] Recaps the key takeaways.
- [ ] Suggests related resources or next learning steps.

#### 2.8 References
- [ ] Ensures all internal and external links work correctly.
- [ ] Links to relevant external resources.
- [ ] Links to relevant external resources.

### 3. Code quality & best practices
- [ ] Ensures all code runs correctly on IBM Quantum systems.
- [ ] Reflects up-to-date information.
- [ ] Uses consistent formatting and follows style guidelines.
- [ ] Includes docstrings and inline comments where necessary.
- [ ] Does not use deprecated (or soon to be deprecated) functions.
- [ ] Uses the latest Qiskit version.

### 4. Accessibility & usability
- [ ] Ensures multimedia elements load properly.
- [ ] Provides descriptive alt text for images (except decorative ones).
- [ ] Uses correct and consistent header formatting.
- [ ] Ensures the tutorial is responsive across different devices.

### 5. Brand consistency & compliance
- [ ] Uses consistent terminology throughout the tutorial.
- [ ] Aligns with IBM Quantum brand identity and style (IBM team's responsibility)

### 6. GitHub submission requirements
- [ ] Includes an SEO-optimized description (max 160 characters) in the Jupyter notebook metadata.
- [ ] The IBM team adds an exit survey for feedback collection.
