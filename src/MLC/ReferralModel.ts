export default interface ReferralModel {
  emailOrPhone: string;
  registered: boolean;
  fulfilled: boolean;
  redeemedFor?: number;
}
