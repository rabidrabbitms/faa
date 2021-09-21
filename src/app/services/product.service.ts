import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import CustomerScoreCard from '../../MLC/Types/CustomerScoreCard';
import LoanRequest from '../../MLC/Types/LoanRequest';
import Product from '../../MLC/Types/Product';
import ProductModel from '../../MLC/Types/ProductModel';
import ProductCategory from '../../MLC/Types/ProductCategory';
import { Global } from './Global';
import HttpService from './http.service';

@Injectable({ providedIn: 'root' })
export default class ProductService {
	constructor(
		readonly router: Router,
		readonly global: Global,
		readonly http: HttpService
	) { }

	async getProducts() {
		return <ProductCategory[]>await this.http.post(
			'MLC.Data.Model.Product',
			{ method: 'GetProductsV2', controller: 'Product' },
			{}
		) || [];
	}
	async getProductModel(productModelID: number) {
		return <Product>await this.http.post(
			'MLC.Data.Model.ProductModel',
			{ method: 'GetProductModel', controller: 'Product' },
			{ Input: { productModelID } }
		);
	}
	async fetchScore(customerID?: number) {
		return <CustomerScoreCard>await this.http.post(
			'MLC.Data.Model.CustomerScoreCard',
			{ method: 'FetchScore', controller: 'Product' },
			{ Input: { customerID } }
		);
	}
	async createLoanRequest(productID: number) {
		const createLoanRequestInput = {
			Customer: this.global.userID,
			Store: this.global.storeID,
			Product: productID
		};

		return <LoanRequest>await this.http.post(
			{ method: 'CreateV2', controller: 'Product' },
			{ Input: createLoanRequestInput }
		);
	}

	canFinanceProduct(): Promise<boolean> {
		return this.http.post(
			{ controller: "Product", method: "CanFinanceProduct" },
			{}
		);
	}

	addToWaitList(productModelID: number) {
		return this.http.post(
			{ controller: "Product", method: "AddToWaitList" },
			{ CustomerID: this.global.customerID, ProductModelID: productModelID }
		);
	}

	removeFromWaitList(productModelID: number) {
		return this.http.post(
			{ controller: "Product", method: "RemoveFromWaitList" },
			{ CustomerID: this.global.customerID, ProductModelID: productModelID }
		);
	}

	IsOnWaitList(productModelID: number): Promise<boolean> {
		return this.http.post(
			{ controller: "Product", method: "IsOnWaitList" },
			{ CustomerID: this.global.customerID, ProductModelID: productModelID }
		);
	}

	sendCashAndCarryEmail(productModelID: number) {
		return this.http.post(
			{ controller: "Product", method: "CashAndCarryEmail" },
			{ productModelID }
		);
	}
}
