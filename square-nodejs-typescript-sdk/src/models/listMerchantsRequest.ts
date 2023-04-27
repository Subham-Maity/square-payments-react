import { nullable, number, object, optional, Schema } from '../schema';

/** Request object for the [ListMerchant]($e/Merchants/ListMerchants) endpoint. */
export interface ListMerchantsRequest {
  /** The cursor generated by the previous response. */
  cursor?: number | null;
}

export const listMerchantsRequestSchema: Schema<ListMerchantsRequest> = object({
  cursor: ['cursor', optional(nullable(number()))],
});
