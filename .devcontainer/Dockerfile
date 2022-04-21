# Start from the base Dockerfile,
# taken from:
# https://github.com/microsoft/vscode-dev-containers
FROM mcr.microsoft.com/vscode/devcontainers/universal:1-linux

USER root

# install dependencies here
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends neovim git wget gnupg curl \
    && apt-get clean

# Install latest chrome stable package, required for cypress
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && apt-get clean

USER codespace

ENV NODE_VERSION=16.13.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/home/codespace/.nvm
RUN rm -rf /home/codespace/.npmrc
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/home/codespace/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# install global npm packages
RUN npm i -g @nrwl/cli nx yarn

# update git settings, neovim should be configured
# by dotfiles later
RUN git config --global core.editor "nvim"

