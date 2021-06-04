# Epicodus | Independent Project 02 | Programming Language Quiz

This is my second independent project for the Epicodus bootcamp program. The goal is to make a quiz that let's a user answer multiple questions and then suggest a programing language for them.

- **Author**: Allister Moon Kays
- **Live Website Link**: [https://alyxmoon.github.io/epicodus-project02-programming-quiz](https://alyxmoon.github.io/epicodus-project02-programming-quiz)
- **Copyright**: MIT License

## Setting up the project
1. Download the files or clone the repository to your computer
2. Open the project folder in your code editor of choice
3. No special tooling is required to preview the site when developing. You can either open the index.html file directly, or use any tool to start a develop server which serves the index.html for
  - for example, in VScode, open the command palette and search for `live server: open with live server`

## Explanation of Code

In this project we were supposed to use jQuery. However, I am experienced with frameworks such as React, so as a challenge I tried to write code that could function somewhat similarly. By that, I mean having 'templates' defined which would be dynamically placed into the document via script, and those templates would be controlled by their own classes.

The templates can be found in `js/data/templates.js`. These are functions which return a string, and they utilize [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to embed variables into the strings.

These template functions are passed to classes which can be thought of as components. They store information and then rebuild the content by passing the updated information to the template function. These classes can be found in `js/classes/..`.

For the questionnaire data itself, those are stored per page in `js/data/..` in the files such as `languages.js` and `questions_page_1.js`.  
The data for questions contains a list of languages and assigns a point to each language. I was originally going to add points to both a language and to a certain 'feature' (such as not requiring semicolons), but I opted to keep it simple and only add points to a language specifically.

The `js/utilities.js` only ended up containing a function called `deepCopy`, which returns an entirely fresh instance of whatever data is passed in to it. This is to avoid accidentally updating the source variable when passing questions to the manager classes. For an example the issue this seeks to avoid, [here's a random blog post](http://dyn-web.com/javascript/arrays/value-vs-reference.php) I found detailing the issue.

After that, it all comes together in the `js/scripts.js` which can be considered the main file. On page load, this creates an instance of the questionnaire manager and questionnaire results page manager. Then it uses the questionnaire manager to create each page.

## Objectives
- `Commits are made regularly with clear messages that finish the phrase 'It will...`
- `The project repo contains a README that includes: author name, project name, description, setup instructions, link to GitHub Pages, and copyright info.`
- `Project is in a polished, portfolio-quality state.`
- `Required content was in place by the deadline.`
- `Project demonstrates understanding of this week's concepts. If prompted, you can discuss your code with an instructor using the correct terminology.`
- `Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.`
- `jQuery is used to show and hide the result after questions are answered and submitted.`
- `Form gathers input from the user.`
- `Variable names are descriptive of what they represent.`
- `Web page is styled using custom CSS.`

- `The project should include the following:`
  - `include a minimum of 5 survey questions.`
  - `offer a minimum of 3 different language suggestions.`

##### Further Exploration Objectives
- `Ask the user for their name and address them directly in all of the responses to them.`
- `Make questions multiple choice and determine which track is right for a user by identifying the letter that was most frequently selected.`
- `use fade in/out or slide in/out jQuery effects throughout the project.`
- `Other enhancements such as more custom CSS, animations, or modals, as desired.`

## External Libraries Used
- Bootstrap v5.0.1
- jQuery v3.6.0

## Sources

Descriptions for the various languages were sourced from the following pages:

##### JavaScript
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
- https://www.hackreactor.com/blog/what-is-javascript-used-for

##### Python
- https://www.python.org/doc/essays/blurb/

##### C#
- https://stackify.com/what-is-c-used-for/

##### Java
- https://en.wikipedia.org/wiki/Java_(programming_language)

##### Swift
- https://developer.apple.com/swift/
- https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-swift-programming-language/

##### PHP
- https://www.thoughtfulcode.com/why-use-php/