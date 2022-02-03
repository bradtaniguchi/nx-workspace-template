#!/bin/bash

git fetch

nvm use
nvm install
npm config delete prefix
nvm alias default node

npm ci
npm i -g @nrwl/cli

echo ">> done"
