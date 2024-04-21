# changesets for learn-npm-and-github-actions

this project uses `@changesets/cli` to manage versioning and changelogs. changesets help us keep track of changes, generate changelogs, and automate the release process.

## creating a changeset

to create a new changeset, run:
```
npx changeset
```
this command will prompt you to select the packages that should be included in the changeset, and to specify the version bump type (major, minor, or patch) for each package. it will then create a new changeset file in the `.changesets` directory.

## viewing changesets

to view all changesets, run:
```
npx changeset status --verbose
```
this command will list all the changesets that have been created but not yet applied.

## applying changesets

to apply changesets and update your package versions, run:
```
npx changeset version
```
this command will initiate the versioning process, ensuring that your package versions are updated according to the changesets you've applied.
