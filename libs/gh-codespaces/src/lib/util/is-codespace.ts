/**
 * Returns if we are in a codespace from the env, which
 * should be passed the `poccess.env`, as we look if
 * there is an environment variable of `CODESPACES=true`
 */
export const isCodespace = (env: Record<string, string>) =>
  env.CODESPACES === 'true';
