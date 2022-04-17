# Start from the base Dockerfile,
# taken from:
# https://github.com/microsoft/vscode-dev-containers
FROM mcr.microsoft.com/vscode/devcontainers/universal:1-linux

USER root

# install dependencies here
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends neovim git wget gnupg \
    && apt-get clean

# Install latest chrome stable package, required for cypress
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && apt-get clean

USER codespace

# Install node 16.13
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

# confirm installation
RUN node -v
RUN npm -v

# install npm packages
RUN npm ci \
    && npm i -g @nrwl/cli nx yarn

# update git settings
RUN git fetch
RUN git config --global core.editor "nvim"

# update user settings
RUN echo "alias vim='nvim'" >> ~/.bashrc
RUN echo "export VISUAL=nvim" >> ~/.bashrc
RUN echo "export EDITOR=nvim" >> ~/.bashrc
RUN echo "# auto-completion\n" \
  "if [ -f /opt/local/etc/profile.d/bash_completion.sh ]; then\n" \
  "  . /opt/local/etc/profile.d/bash_completion.sh\n" \
  "fi\n" >> ~/.bashrc

