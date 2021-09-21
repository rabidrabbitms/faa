import { byID } from '../api/model';
import Loan from 'src/MLC/Types/Loan';

export default function resolveLoan(loanId: number) {
    return byID<Loan>('MLC.Data.Models.Loan', loanId, {
        Balances: true,
        Request: { LoanType: true },
        NextPaymentSchedule: true,
        PaymentSchedule: [{}],
        User: true,
        Status: {
            Type: true
        },
        Customer: {
            Person: {
                BankAccounts: {
                    BankAccount: {
                        Bank: true,
                        Type: true
                    }
                },
                DebitCards: {
                    DebitCard: {
                        RecentTransactions: true
                    }
                }
            }
        }
    });
}
