export interface PaymentMethod {
	Name: string;
}
export interface DebitCardMethod extends PaymentMethod {
	DebitCards: Array<MethodItem>;
}
export interface BankAccountMethod extends PaymentMethod {
	BankAccounts: Array<MethodItem>;
}

export interface MethodItem {
	Name: string;
	ID: number;
	Number: number;
	IsPrimary: boolean;
	IsValid: boolean;
	IsRevoked: boolean;
	Message: string;

	Institution?: string;
	AccountType?: string;
}