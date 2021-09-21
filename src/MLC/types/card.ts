

import address from './Address';
import Model from './Model';

export default card


export interface card  {
  brandId?: string;
  brandName?: string;
  accountNumber?: string;
  cardHolderName?: string;
  ExpiryMonth?: number;
  ExpiryYear?: number;
  billingAddress?: address;
}