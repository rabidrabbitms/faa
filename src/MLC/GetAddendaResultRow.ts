export default interface GetAddendaResultRow {
  ID: number;
  Type: number;
  Status: number;
  Date: string;
  LoanID?: number;
  DaysRemaining: number;
  Memo?: string;
  Data?: string;
  Html?: string;
  Inputs?: string;
}
