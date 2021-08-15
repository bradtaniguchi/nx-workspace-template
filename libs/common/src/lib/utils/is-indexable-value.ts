/**
 * Type-guard that can be used on individual entities, to verify
 * they can be a "key" in a Record<> type.
 */
export const isIndexableValue = (
  value: unknown
): value is string | symbol | number =>
  typeof value === 'string' ||
  typeof value === 'symbol' ||
  typeof value === 'number';
