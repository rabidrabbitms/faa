import { Injectable } from "@angular/core";
import HttpService from "./http.service";
import PersonBankAccount from "../../MLC/Types/PersonBankAccount";

@Injectable({ providedIn: 'root' })
export default class BankService {
  constructor(readonly http: HttpService) { }
  /**
		*
		* @param PersonBankAccount
		* @param redirectRoute the public url relative route to which microbilt will redirect the user after completion
		*/
  async initiateIBV({ PersonBankAccount, redirectRoute }: { PersonBankAccount: PersonBankAccount, redirectRoute: string }) {
    const response = await this.http.post(
      'PersonBankAccount',
      { controller: 'PersonBankAccount', method: 'CreateIBVerification' },
      {
        Input: {
          PersonBankAccountID: PersonBankAccount.ID,
          RedirectUrl: `${window.location.origin}/#/${redirectRoute}`
        }
      }
    );
    return response;
  }

  async checkPersonIBV(personID: number) {
    const response = await this.http.post(
      'PersonBankAccount',
      { controller: 'PersonBankAccount', method: 'CheckPersonIBVerifications' },
      {
        Input: personID
      }
    );
    return response;
  }
}