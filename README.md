# LISA FOLAWIYO

## DevX

Husky that is installed on the project taps into git hooks to enforce formatting and conventional commit standards before pushing code to the repository.

## Husky

Husky is a git hook manager that allows you to run scripts on git hooks. It is installed as a dev dependency in the project.

### notes

for **MacOS** users, run the command `chmod ug+x .husky/*` to make the husky hooks executable.

## Conventional Commits

Conventional Commits is a specification for adding human and machine readable meaning to commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org), by describing the features, fixes, and breaking changes made in commit messages.
[more info](https://www.conventionalcommits.org/en/v1.0.0/)

## Commitlint

Commitlint is a tool that checks if your commit messages meet the conventional commit format. It is installed as a dev dependency in the project.
