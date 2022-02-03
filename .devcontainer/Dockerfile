# Start from the base Dockerfile,
# taken from:
# https://github.com/microsoft/vscode-dev-containers
FROM mcr.microsoft.com/vscode/devcontainers/universal:1-linux

USER root

# install dependencies here
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends neovim

USER codespace

# setup nvm using .nvmrc settings
RUN git fetch
RUN nvm use
RUN nvm install
RUN npm config delete prefix
RUN nvm alias default node

# update git settings
RUN git config --global core.editor "nvim"

# install deps
RUN npm ci
RUN npm i -g @nrwl/cli


# update user settings
RUN echo "alias vim='nvim'" >> ~/.bashrc
RUN echo "export VISUAL=nvim" >> ~/.bashrc
RUN echo "export EDITOR=nvim" >> ~/.bashrc
RUN echo "# auto-completion\n" \
  "if [ -f /opt/local/etc/profile.d/bash_completion.sh ]; then\n" \
  "  . /opt/local/etc/profile.d/bash_completion.sh\n" \
  "fi\n" >> ~/.bashrc
