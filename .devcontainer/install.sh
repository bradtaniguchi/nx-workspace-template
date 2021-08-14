#!/bin/bash

# Get latest from repo
echo ">> fetching"
git fetch

# install and setup nvm version
echo ">> updating nvm"
nvm use
nvm install
npm config delete prefix
nvm alias default node

# set vim as git editor
echo ">> updating git config"
git config --global core.editor "nvim"

# set vim as other editors in general
echo ">> setting environment variables"
export VISUAL=nvim
export EDITOR="$VISUAL"
echo "export VISUAL=nvim" >> ~/.bashrc
echo "export EDITOR=nvim" >> ~/.bashrc

# setup git completion
echo ">> set git completion"
echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc


# install neovim and cypress deps, required by dotfiles
echo ">> installing dependencies"
sudo apt install -y --no-install-recommends neovim


# install npm packages
echo ">> installing node deps"
npm ci

# install global nx cli, not always required but useful to have
npm i -g @nrwl/cli

# manually install cypress, as it doesn't work out of the box for some reason
# activate if needed
# echo ">> re-installing cypress"
# npx cypress install

echo ">> done"
