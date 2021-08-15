/**
 * Returns the codespace name from the env, should be passed
 * the `process.env` from nodejs.
 */
export const getCodespaceName = (env: Record<string, string>): string =>
  env.CODESPACE_NAME;
