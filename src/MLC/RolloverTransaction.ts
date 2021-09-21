export interface RolloverTransaction {
  id?: number;
  item: any;
  amount: number;
  method?: string;
}

export interface RolloverRequestTransaction extends RolloverTransaction{
  date: Date;
}
export interface RolloverFinalizeTransaction extends RolloverTransaction{
  payDate?: Date;
}