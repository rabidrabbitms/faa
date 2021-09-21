import ThirdPartyAccount from './Types/ThirdPartyAccount';
import PersonBankAccount from './Types/PersonBankAccount';
import PersonDebitCard from './Types/PersonDebitCard';

export default PaymentModel;

/**
 * @example
```ts
import PaymentModel from '../../MLC/PaymentModel';
import PersonDebitCard from '../../MLC/types/PersonDebitCard';
import PersonBankAccount from '../../MLC/types/PersonBankAccount';

declare let personBankAccount: PersonBankAccount;
declare let personDebitCard: PersonDebitCard;

// to allow any method
let model: PaymentModel = {
	method: 'ACH',
	item: personBankAccount,
	amount: 50.0
};

// to allow only the 'DebitCard' method
let model: PaymentModel<'DebitCard'> = {
	method: 'DebitCard',
	item: personBankAccount, // error
	amount: 50.0
};

// to allow only the 'DebitCard' method
let model: PaymentModel<'DebitCard'> = {
	method: 'DebitCard',
	item: personDebitCard, // OK
	amount: 50.0
};
```
 *
 */
interface PaymentModel<
    MethodName extends keyof PaymentMethods = keyof PaymentMethods
> {
    method: MethodName;
    item: PaymentMethods[MethodName];
    amount: number;
    date: Date;
}

export interface PaymentMethods {
    ACH: PersonBankAccount;
    DebitCard: PersonDebitCard;
    ECheck: PersonBankAccount;
    beCard: {BeCard: 'beCard'};
}
