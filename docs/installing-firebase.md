# Installing firebase

## Installing supporting packages

Be sure to install the global firebase tools with:

```bash
npm install -g firebase-tools@latest
```

**note** be sure to login locally with:

```bash
firebase login 
```

or for cloud instances:
```bash
firebase login --no-localhost
```

Then setup firebase:
```bash
firebase init
```

**note** this may fail a few times due to forgetting to create the project, or firestore rules.
**note** most options will be selected as "Y", especially for a new clean repo.


After setting up firebase for this project, setup @angular/fire integration with:

```bash
npm install --save @angular/fire
```

**note** the `nx add` varient doesn't work.

**note** detailed post on doing this setup:
<https://itnext.io/nx-nest-firebase-the-dream-616e8ee71920>

## Deployments thru CI/CD

Deployments to firebase have been done in the past, but I have not
updated the process recently.

Here's the snippet being use from the latest attempt,
there might be a more clear and updated way.

**note** this command is from a `circleci` base project!

```yaml
- run:
  name: install firebase cli
  command: npm install firebase-tools
- run:
  name: deploy to firebase
  command: npx firebase deploy --token=$FIREBASE_TOKEN --only=hosting
```
