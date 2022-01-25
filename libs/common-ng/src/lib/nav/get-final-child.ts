import { ActivatedRoute } from '@angular/router';

/**
 * Function that can be used to get the "final child" in the route.
 * Can be mixed with the `ExtraOptions`'s `paramsInheritanceStrategy` "always"
 * setting passed to the `RouterModule`.
 *
 * Common settings are available via `COMMON_NG_ROUTER_OPTIONS`
 */
export const getFinalChild = (root: ActivatedRoute) => {
  let child = root;
  while (child.firstChild) child = child.firstChild;

  return child;
};
