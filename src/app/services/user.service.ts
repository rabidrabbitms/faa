import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import env from 'env';
import Credentials from "../../MLC/Credentials";
import Registration from '../../MLC/Registration';
import withExpiry from '../utilities/with-expiry';
import { Global } from './Global';
import HttpService from './http.service';

@Injectable({ providedIn: 'root' })
export default class UserService {
    constructor(
        readonly router: Router,
        readonly global: Global,
        readonly http: HttpService
    ) { }
    async validatePassword(credentials: { Username?: string, Password?: string }) {
        try {
            return await this.http.post(
                { method: 'Signin', controller: 'User' },
                {
                    ...credentials
                }
            );
        } catch (e) {
            throw e;
        }
	}
    async login(credentials: Credentials) {
        try {
            const { User, Token } = await this.http.post(
                'MLC.Data.Model.User',
                { method: 'Signin', controller: 'User' },
                {
                    Portal: this.global.brandCode + " Website",
                    Device: navigator.userAgent,
                    ...credentials,
                    TypeMapping: {
                        User: {
                            Person: {
                                Customer: {
                                    Status: {
                                        Type: {}
                                    },
                                    Store: {
                                        Brand: {},
                                        Address: {
                                            Zip: {
                                                City: {
                                                    State: {}
                                                }
                                            }
                                        },
                                        MainPhone: {
                                            Phone: {}
                                        },
                                        Email: {}
                                    }
                                }
                            }
                        }
                    }
                }
            );
            const userWithExpiry = withExpiry({ ...User, Token });
            localStorage.user = JSON.stringify(userWithExpiry);

            // push google id
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'login',
                userId: User.ID
            });

            return userWithExpiry;
        } catch (e) {
            throw e;
        }
    }
    async initiateTwitterSignin() {
        const response = await this.http.fetch(`${env.endpointBaseUrl}/user/initiatetwittersignin`, {
            method: 'POST'
        });
        const redirectUrl = await response.json();
        window.location.assign(redirectUrl);
    }
    async hasTwitterCredentials() {
        const response = await this.http.fetch(`${env.endpointBaseUrl}/user/hastwittercredentials`);
        return <boolean>await response.json();
    }
    async easyPayLogin({ lastName, ssnLast4, dob }) {
        const { User, LoanID, Token } = await this.http.post(
            'MLC.Data.Model.User',
            { method: 'EasyPaySignin', controller: 'User' },
            { Input: { LastName: lastName, SSNLast4: ssnLast4, DOB: dob } }
        );
        const userWithExpiry = withExpiry({ ...User, LoanID, Token });
        localStorage.easyPayUser = JSON.stringify(userWithExpiry);
        return userWithExpiry;
    }

    fetchUsername(username: string) {
        return this.http.post(
            'MLC.Data.Model.User',
            { method: 'FetchUsername', controller: 'User' },
            { Input: { Username: username.trim() } }
        );
    }

    async validateEmail(value: string | undefined | null) {
        if (value) {
            const valid = await this.http.post(
                { controller: 'User', method: 'ValidEmail' },
                { Input: value }
            );
            if (!valid) return { email: true };
        }
    }

    canRegister(ssn) {
        return this.http.post(
            'MLC.Data.Model.User',
            { method: 'CanRegister', controller: 'User' },
            { Input: { SSN: ssn } }
        );
    }

    register(userInfo: Registration) {
        return this.http.post(
            { method: 'Register', controller: 'User' },
            {
                FirstName: userInfo.firstName,
                LastName: userInfo.lastName,
                Username: userInfo.username,
                Phone: userInfo.phone?.replace(/\(|\)|\s|-/, ''),
                Password: userInfo.password,
                ConfirmPassword: userInfo.confirmPassword,
                DOB: userInfo.dob,
                SSN: userInfo.ssn,
                Referrer: userInfo.referrer
            }
        );
    }

    async recoverPassword(recoveryInfo: { username: string }) {
        await this.http.post(
            { method: 'ForgotPassword', controller: 'User' },
            {
                Username: recoveryInfo.username,
                ClientName: window.location.pathname.match(/easymoneynow\.com/i) ? 'Easy Money Group' : 'Minute Loan Center'
            }
        );

        return 'Recovery successful! Check your email.';
    }

    recoverUsername(recoveryInfo: { dob: string; lastName: string; ssn: string }) {
        return this.http.post(
            { method: 'ForgotUsername', controller: 'User' },
            {
                LastName: recoveryInfo.lastName,
                DOB: recoveryInfo.dob,
                SSN: recoveryInfo.ssn
            }
        );
    }
}
