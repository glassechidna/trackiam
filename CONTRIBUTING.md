# Contributing to Track IAM

If you've made it this far you're hopefully thinking about contributing to Track IAM. Awesome! We'd love to have your contributions, even if it is just in the form of an issue in the issue tracker or a PR for a spelling mistake.

## How can I contribute?
Like we said, issues in the issue trackers, PRs to fix bugs / spelling / my janky javascript code.

We keep a wishlist of new features we want to add in the issue tracker, it's a good place to discuss what could be added and how it should be implemented.

Right now there isn't much in the issue tracker but there is a "good first issue" flag which will in future adorn easy pickings.

## Project structure

`/docs` contains the static site that acts as a UI for easily consuming changes
`/generator` contains all the golang code that does the heavy lifting - scraping various AWS sites for juicy IAM information.
`/policies` contains all the managed IAM policies we've collected
`/services` contains all the IAM service APIs and actions we've collected

