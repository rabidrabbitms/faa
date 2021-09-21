import AdverseAction from '../../../MLC/Types/AdverseAction';
import Announcement from '../../../MLC/Types/Announcement';
import Check from '../../../MLC/Types/Check';
import Customer from '../../../MLC/Types/Customer';
import CustomerNote from '../../../MLC/Types/CustomerNote';
import CustomerReference from '../../../MLC/Types/CustomerReference';
import DebitCard from '../../../MLC/Types/DebitCard';
import DenialCategory from '../../../MLC/Types/DenialCategory';
import District from '../../../MLC/Types/District';
import { StoreVault } from '../../../MLC/Types/Drawer';
import Income from '../../../MLC/Types/Income';
import Loan from '../../../MLC/Types/Loan';
import LoanRequest from '../../../MLC/Types/LoanRequest';
import LoanTransaction from '../../../MLC/Types/LoanTransaction';
import LoanType from '../../../MLC/Types/LoanType';
import Model from '../../../MLC/Types/Model';
import Person from '../../../MLC/Types/Person';
import PersonBankAccount from '../../../MLC/Types/PersonBankAccount';
import PersonDebitCard from '../../../MLC/Types/PersonDebitCard';
import PersonPhone from '../../../MLC/Types/PersonPhone';
import Product from '../../../MLC/Types/Product';
import Report from '../../../MLC/Types/Report';
import RVPOverride from '../../../MLC/Types/RVPOverride';
import RVPOverrideStatus from '../../../MLC/Types/RVPOverrideStatus';
import ScannedDocument from '../../../MLC/Types/ScannedDocument';
import ScannedDocumentBlob from '../../../MLC/Types/ScannedDocumentBlob';
import Store from '../../../MLC/Types/Store';
import StoreAdvert from '../../../MLC/Types/StoreAdvert';
import StoreVaultTransaction from '../../../MLC/Types/StoreVaultTransaction';
import User from '../../../MLC/Types/User';
import Zip from '../../../MLC/Types/Zip';
import Bank from '../../../MLC/Types/Bank';
import CustomerOption from '../../../MLC/Types/CustomerOption';
// TODO: define Addendum independently
import { Contract, Contract as Addenda } from '../../contracts/types/Contract';
import { ThirdPartyAccount } from '../../../MLC/Types/_import';
import AdditionalAdvanceRequest from '../../../MLC/Types/AdditionalAdvanceRequest';

export interface Fetchable {
	Addenda: Addenda;
	AdditionalAdvanceRequest: AdditionalAdvanceRequest;
	Bank: Bank;
	Customer: Customer;
	CustomerOption: CustomerOption;
	CustomerNote: CustomerNote;
	Contract: Contract;
	DebitCard: DebitCard;
	Person: Person;
	Loan: Loan;
	Store: Store;
	Model: Model;
	Income: Income;
	PrimaryIncome: Income;
	PersonDebitCard: PersonDebitCard;
	PersonBankAccount: PersonBankAccount;
	PersonPhone: PersonPhone;
	LoanType: LoanType;
	LoanTransaction: LoanTransaction;
	LoanRequest: LoanRequest;
	Zip: Zip;
	StoreVaultTransaction: StoreVaultTransaction;
	StoreAdvert: StoreAdvert;
	StoreVault: StoreVault;
	Announcement: Announcement;
	DenialCategory: DenialCategory;
	RVPOverride: RVPOverride;
	RVPOverrideStatus: RVPOverrideStatus;
	Check: Check;
	CustomerReference: CustomerReference;
	District: District;
	ScannedDocument: ScannedDocument;
	ScannedDocumentBlob: ScannedDocumentBlob;
	Report: Report;
	User: User;
	AdverseAction: AdverseAction;
	Product: Product;
	ThirdPartyAccount: ThirdPartyAccount;
}
export type TypeMapping<T extends Model> = {
	[P in keyof T]?: PropertyMapping<T[P]> | boolean
};

export type PropertyMapping<T> = T extends Array<infer E>
	? TypeMapping<E>
	: TypeMapping<T>;
