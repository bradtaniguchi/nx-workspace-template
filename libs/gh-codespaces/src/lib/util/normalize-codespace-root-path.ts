/**
 * Returns the normalized codespace path, from the given params.
 * Generally used on the back-end for oauth redirects, will require
 * work with the console documentation for supported domains.
 *
 * **note** still a WIP and needs testing to see if this is a viable
 * approach to support oauth redirects in a codespace.
 *
 * @returns a string of similar structure as:
 * ```
 * https://<name-of-codespace>-<port>.githubpreview.dev/
 * ```
 */
export const normalizeCodespaceRootPath = ({
  codespaceName,
  port,
}: {
  /**
   * The name of the codespace, available from the environment variables
   * in a codespace via `CODESPACE_NAME`
   */
  codespaceName: string;
  /**
   * The port number we are to append to the end of the codespaceURL.
   */
  port: number | string;
}) => `https://${codespaceName}-${port}.githubpreview.dev/`;
