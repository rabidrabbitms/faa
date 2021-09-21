import ReferralModel from "./ReferralModel";

export default interface CustomerReferralsModel {
  referrals: ReferralModel[];
  redeemableUSD: number;
  statement: Statement;
}

export interface Statement {
  totalPayoutEarned: number;
  totalRedeemed: number;
  redemptions?: Redemption[];
}

export interface Redemption {
  date: Date;
  amount: number;
  method: string;
}