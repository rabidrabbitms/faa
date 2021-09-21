

import Model from './Model';

export default Authentication


export interface Authentication  {
  authenticationMethod?: string;
  cardEnrolledMethod?: string;
  eciFlag?: string;
  paResStatus?: string;
  scEnrollmentStatus?: string;
  signatureVerification?: string;
  xid?: string;
}