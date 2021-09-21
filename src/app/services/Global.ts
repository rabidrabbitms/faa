import env from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { types } from './api/model';
import * as moment from 'moment';
import withExpiry from '../utilities/with-expiry';
import User from 'src/MLC/types/User';

@Injectable({ providedIn: 'root' })
export class Global {
    brandCode ='FA';
    brand = this.brandCode === 'FA' ? 'First-Avenu' : '';
    brandLogo = this.brandCode === 'FA' ? 'First_Avenu' : '';
    brandWebsite = this.brandCode === 'FA' ? '' : '';
    logout(redirect = '/login') {
        Object.keys(localStorage).forEach(key => {
            delete localStorage[key];
        });

        delete this.__user;
        delete this.__types;
        delete this.User;

        return this.router.navigateByUrl(redirect);
    }
    constructor(readonly router: Router) { }

    private __user?: User & { expiry: moment.Moment };

    get User() {
        if (!this.__user) {
            const json = localStorage.user;
            if (json) this.__user = JSON.parse(json);
        }
        if (this.__user && this.__user.expiry) {
            const now = moment();
            if (now.isAfter(this.__user.expiry)) {
                this.logout().catch(console.error);
                return;
            }
        }
        return this.__user;
    }
    set User(value) {
        this.__user = value && withExpiry(value);
        if (this.__user) {
            localStorage.user = JSON.stringify(this.__user);
        } else {
            delete localStorage.user;
            this.__user = undefined;
        }
    }
    set Person(value) {
        this.User = withExpiry({ ...this.User, Person: value });
    }

    get userID() {
        return this.User?.ID;
    }
    get personID() {
        return this.User?.Person?.ID;
    }
    get customerID() {
        return (
            this.User?.Person?.Customer?.ID
        );
    }
    get storeID() {
        return (
            this.User?.Person?.Customer?.Store?.ID
        );
    }
    get store() {
        return (
            this.User?.Person?.Customer?.Store
        );
    }
    get storeAddress() {
        return (
            this.User?.Person?.Customer?.Store?.Address
        );
    }
    get storeZip() {
        return (
            this.User?.Person?.Customer?.Store?.Address?.Zip
        );
    }
    get storeStateCode() {
        return (
            this.User?.Person?.Customer?.Store?.Address?.Zip?.City?.State?.Code
        );
    }
    get storeStateName() {
        return this.User?.Person?.Customer?.Store?.Address?.Zip?.City?.State?.Name;
    }
    get storeMainPhoneNumber() {
        return (
            this.User?.Person?.Customer?.Store?.MainPhone?.Phone?.Number ? this.User?.Person?.Customer?.Store?.MainPhone?.Phone?.Number : "18009603278"
        );
    }
    get storeEmail() {
        return (
            this.User?.Person?.Customer?.Store?.Email?.Address ? this.User?.Person?.Customer?.Store?.Email?.Address : `questions@minlc.com`
        );
    }
    get status() {
        return (
            this.User?.Person?.Customer?.Status?.Type?.Name
        );
    }
    get userFullName() {
        return `${this.User?.Person?.FirstName} ${this.User?.Person?.LastName}`;
    }


    private __typesFetchCount: number = 0;
    private __types: any;
    get Types() {
        if (!this.__types && this.__typesFetchCount < 10) {
            this.fetchTypes().then(types => {
                this.__types = types;
            });
            this.__typesFetchCount++;
        }
        return this.__types || {};
    }
    async fetchTypes() {
        return await types();
    }
    get loanRequestStep() {
        return localStorage.loanRequestStep;
    }
    set loanRequestStep(step: string) {
        localStorage.loanRequestStep = step;
    }
}
