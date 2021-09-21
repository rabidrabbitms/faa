import { Injectable } from '@angular/core';
import HttpService from './http.service';

@Injectable({ providedIn: 'root' })
export default class PhoneService {
	constructor(readonly http: HttpService) { }

	/**
     * Requests API to send a PIN to the customer's phone.
     * @param id ID of the phone number to send it to.
     */
	requestPIN(id: number): Promise<PinResponse> {
		return this.http.post(
			{ controller: 'Phone', method: 'RequestPIN' },
			{ Input: { PersonPhone: id } }
		);
	}

	/**
     * Confirms phone PIN number.
     * @param id ID of the phone number sent to.
     * @param pin PIN to verify.
     */
	confirmPIN(id: number, pin: string) {
		return this.http.post(
			{ controller: 'Phone', method: 'ConfirmPIN' },
			{ Input: { PersonPhone: id, PIN: pin } }
		);
	}
}

interface PinResponse {
	PinStatus: PinStatus;
	Message?: string;
}

export enum PinStatus { Success, Failed, Exists }