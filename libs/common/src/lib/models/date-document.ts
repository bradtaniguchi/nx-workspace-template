/**
 * A date document represents an object with 2 date properties,
 * createdAt and updatedAt.
 *
 * These properties are usually readonly and created by the database.
 */
export interface DateDocument {
  createdAt: Date;
  updatedAt?: Date;
}

// whitespace change again
