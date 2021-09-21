

import card from './card';
import address from './Address';
import person from './Person';
import Authentication from './Authentication';
import Model from './Model';

export default result


export interface result  {
  card?: card;
  shippingAddress?: address;
  personalInfo?: person;
  walletId?: string;
  authenticationOptions?: Authentication;
}