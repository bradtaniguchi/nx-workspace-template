import { DocumentWithId } from '../models/id-document';
import { isIndexableValue } from './is-indexable-value';

/**
 * Generic map function used to convert an array to
 * a map with the given key. All ids are automatically converted to ids
 * in the return mapping
 * @param entities the list of entities to transform to a map
 * @param key the key to use as the index type.
 */
export const toMap = <
  Entity extends DocumentWithId<TypeOfKey>,
  Key extends keyof Entity,
  TypeOfKey extends string
>(
  entities: Entity[],
  key?: Key
): Record<(Entity[Key] & string) | symbol | number, Entity> => {
  type RecordKey = (Entity[Key] & string) | symbol | number;
  if (!entities) return {} as Record<RecordKey, Entity>;

  return entities.reduce((acc, entity) => {
    const keyValue = entity[key || 'id'];
    if (isIndexableValue(keyValue)) acc[keyValue as RecordKey] = entity;

    return acc;
  }, {} as Record<RecordKey, Entity>);
};
