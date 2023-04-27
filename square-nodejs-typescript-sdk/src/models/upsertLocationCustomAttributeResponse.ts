import { array, lazy, object, optional, Schema } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';
import { Error, errorSchema } from './error';

/**
 * Represents an [UpsertLocationCustomAttribute]($e/LocationCustomAttributes/UpsertLocationCustomAttribute) response.
 * Either `custom_attribute_definition` or `errors` is present in the response.
 */
export interface UpsertLocationCustomAttributeResponse {
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const upsertLocationCustomAttributeResponseSchema: Schema<UpsertLocationCustomAttributeResponse> = object(
  {
    customAttribute: [
      'custom_attribute',
      optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
