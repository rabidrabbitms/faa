import { Injectable } from '@angular/core';
import 'share-api-polyfill';
import CustomerReferralsModel from '../../MLC/CustomerReferralsModel';
import FacebookService from './facebook.service';
import { Global } from './Global';
import HttpService from './http.service';
import Loan from '../../MLC/Types/Loan';
import FileService from './file.service';

@Injectable()
export default class ReferralService {
	constructor(
		readonly global: Global,
		readonly http: HttpService,
		readonly facebookService: FacebookService,
		readonly fileService: FileService
	) { }

	referralWebsite = this.global.brandCode === 'EMG' ? `http://mlcrefer.us/?referrer=${this.global.customerID}` : `http://emgrefer.us/?referrer=${this.global.customerID}`;

	async	downloadFlier() {
		await this.fileService.downloadFile(`referral/flier?referrerID=${this.global.customerID}&brand=${this.global.brand}`);
	}
	async	fetchRedemptionOptions() {
		const response = await this.http.fetch(`referral/redemptionoptions/${this.global.customerID}`);
		return <RedemptionMethod[]>await response.json();
	}

	async referViaEmail(email: string) {
		const response = await this.http.fetch('referral/referviaemail', {
			method: 'POST',
			body: JSON.stringify({
				email,
				referrerID: this.global.customerID,
				brand: this.global.brand
			})
		});
		return <true>await response.json();
	}
	async referViaSMS(phone: string) {
		const response = await this.http.fetch('referral/referviasms', {
			method: 'POST',
			body: JSON.stringify({
				phone,
				referrerID: this.global.customerID,
				brand: this.global.brand
			})
		});
		return <true>await response.json();
	}
	async shareViaTwitter() {
		await this.http.fetch('referral/shareviatwitter', {
			method: 'POST',
			body: JSON.stringify({
				referrerID: this.global.customerID,
				brand: this.global.brand
			})
		});
	}
	shareViaFacebook() {
		return this.facebookService.shareReferralLink(this.referralWebsite);
	}

	async shareViaPlatform() {
		if ('share' in window.navigator)
			try {
				await window.navigator.share({
					title: `Join me`,
					text: `Click the link and get a $10 rebate on your first loan! Discover why myself and many of our neighbors prefer ${this.global.brand}.`,
					url: this.referralWebsite
				});
			} catch (e) {
				console.info(e);
			}
	}

	async shareViaClipboard() {
		try {
			await navigator.clipboard.writeText(this.referralWebsite);
		} catch (e) {
			console.info(e);
			legacyCopyToClipboardFallback(this.referralWebsite);
		}
	}

	async fetchReferrals() {
		const response = await this.http.fetch(
			`referral/customer/${this.global.customerID}`
		);
		const result = <CustomerReferralsModel>await response.json();
		return <CustomerReferralsModel>{
			...result,
			redeemableUSD: result.redeemableUSD
		};
	}

	async redeem(model: { amount: number; method: string; loan: Loan }) {
		const response = await this.http.fetch(`referral/redeem`, {
			method: 'POST',
			body: JSON.stringify({
				...model,
				redeemerID: this.global.customerID,
				loanID: model.loan?.ID
			})
		});
	}
}

function legacyCopyToClipboardFallback(link: string) {
	const input = document.createElement('input');
	input.hidden = false;
	input.value = link;
	const button = document.createElement('button');
	button.hidden = false;
	button.onclick = () => {
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input);
		document.body.removeChild(button);
	};
	document.body.appendChild(input);
	document.body.appendChild(button);
	button.click();
}
export interface RedemptionMethod {
	name: string;
	fee: number;
	message: string;
}
