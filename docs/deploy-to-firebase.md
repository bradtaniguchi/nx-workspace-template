# Deploy to Firebase

Deployments to firebase have been done in the past, but I have not updated the process recently.

Here's the snippet being use from the latest attempt, there might be a more clear and updated way.

**note** this command is from a `circleci` base project!

```yaml
- run:
  name: install firebase cli
  command: npm install firebase-tools
- run:
  name: deploy to firebase
  command: npx firebase deploy --token=$FIREBASE_TOKEN --only=hosting
```
