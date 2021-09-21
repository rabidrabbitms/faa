import BankAccountType from '../../../MLC-Apps/src/MLC/Types/BankAccountType';
import BankAccountVerificationType from '../../../MLC-Apps/src/MLC/Types/BankAccountVerificationType';
import CheckStatus from '../../../MLC-Apps/src/MLC/Types/CheckStatus';
import CustomerNoteType from '../../../MLC-Apps/src/MLC/Types/CustomerNoteType';
import CustomerReferenceType from '../../../MLC-Apps/src/MLC/Types/CustomerReferenceType';
import CustomerStatusType from '../../../MLC-Apps/src/MLC/Types/CustomerStatusType';
import DocumentStatusType from '../../../MLC-Apps/src/MLC/Types/DocumentStatusType';
import EmploymentType from '../../../MLC-Apps/src/MLC/Types/EmploymentType';
import IncomeType from '../../../MLC-Apps/src/MLC/Types/IncomeType';
import LoanAutoPayType from '../../../MLC-Apps/src/MLC/Types/LoanAutoPayType';
import LoanType from '../../../MLC-Apps/src/MLC/Types/LoanType';
import PettyCashType from '../../../MLC-Apps/src/MLC/Types/PettyCashType';

export default interface TypesModel {
  CheckStatuses: CheckStatus[];
  PettyCashes: PettyCashType[];
  CustomerStatuses: CustomerStatusType[];
  Incomes: IncomeType[];
  Employments: EmploymentType[];
  CustomerReferences: CustomerReferenceType[];
  BankAccounts: BankAccountType[];
  BankAccountVerifications: BankAccountVerificationType[];
  AutoPays: LoanAutoPayType[];
  Loans: LoanType[];
  DocumentStatuses: DocumentStatusType[];
  CustomerNotes: CustomerNoteType[];
}
