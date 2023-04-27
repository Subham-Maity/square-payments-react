import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a response from deleting an order custom attribute. */
export interface DeleteOrderCustomAttributeResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteOrderCustomAttributeResponseSchema: Schema<DeleteOrderCustomAttributeResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
