import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class ValidationService {
    getErrorMessage(validatorName: string, validatorValue?: unknown) {
        const config = {
            required: 'This is a Required Field.',
            numeric: 'The value can only contain numbers.',
            positiveValue: 'The value must be greater than 0.',
            wholeValue: 'The value must be a whole number.',
            alpha: 'The value can only contain letters.',
            limit: 'The value must be between the Minimum and Maximum Loan amounts.',
            card: 'The value must be a valid card number.',
            routing: 'The value must be a valid routing number.',
            payment: 'The Payment Amount must be between zero and the Balance.',
            repayment: 'The Payment Amount must be between the Minimum Down Payment Amount and the Loan Balance.',
            used: 'This RVP Code has already been used.  Please get a new RVP Code.',
            cash: 'You do not have sufficient funds in your drawer.  Please transfer funds from your vault.',
            year: 'The value must be a 4 digit number greater than 1900 and less than next year.',
            age: 'The value must be greater than 18 years ago and less than 110 years ago.',
            email: 'Invalid email address',
            password: 'Invalid password. Password must be at least 5 characters long, contain a number, and a special character.',
            passwordsDoNotMatch: 'Passwords do not match.',
            minimumlength: `The value must be at least ${validatorValue} characters.`,
            maximumlength: `The value must be less than ${validatorValue} characters.`,
            match: 'This field does not match its corresponding field.',
            twodecimals: 'The value cannot have more than 2 decimal places.',
            alreadyRegistered: "You are already in our system, try to sign in instead.  If you don't remember or have credentials, please use the forgot password option.",
            existingUsername: "We already have this username in our system, try to sign in instead. If you don't remember your password, use the forgot password option.",
            invalidUsernameOrPassword: 'Username and Password could not be found',
            phone: 'Invalid phone number. Please enter a 10 digit US Telephone number.',
            ssn: 'Invalid SSN. Please enter a 9 digit SSN.',
            zip: 'Zip must be a 5 digital postal code.'
        };

        return config[validatorName] || validatorName;
    }
    // tslint:disable:no-null-keyword
    alpha = (control: AbstractControl) => {
        if (!control.value === undefined || control.value === null) return null;

        if (control.value.match(/^[a-zA-Z\s]+$/)) return null;
        else return { alpha: true };
    };
    numeric = (control: AbstractControl) => {
        if (control.value === undefined || control.value === null) return null;

        if (control.value.match(/^[0-9]+$/)) return null;
        else return { numeric: true };
    };

    integral = ({ value }: AbstractControl) => {
        return String(value).match(/^\d+$/) ? null : { numeric: true };
    };

    card = (control: AbstractControl) => {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (!control.value) return null;

        if (
            control.value.match(
                /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
            )
        ) {
            return null;
        } else {
            return { card: true };
        }
    };

    email = (control: AbstractControl) => {
        if (!control.value) return null;

        // RFC 2822 compliant regex
        if (
            control.value.match(
                /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/
            )
        ) {
            return null;
        } else {
            return { email: true };
        }
    };

    password = (control: AbstractControl) => {
        if (!control.value) return null;

        //5 min characters, Contains 1 number, Contains 1 special character
        if (
            control.value.match(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,}$/
            )
        )
            return null;
        else return { password: true };
    };

    dob = (control: AbstractControl) => {
        if (!control.value) return null;

        const date: Date = new Date(
            new Date().setFullYear(new Date().getFullYear() - 18)
        );
        const val: Date = new Date(control.value);
        if (val > date)
            //less than 18
            return { age: true };
        if (new Date().getFullYear() - val.getFullYear() > 110)
            //older than 110
            return { age: true };

        return null;
    };

    phone = (control: AbstractControl) => {
        const regex = /\(?\d{3}\)?\s?\d{3}-?\d{4}$/;
        if (control.value && !regex.test(control.value))
            return { phone: true };
        return null;
    };

    wholeNumber = (control: AbstractControl) => {
        if (control.value === undefined || control.value === null) return null;
        if (control.value != Math.floor(control.value))
            return { wholeValue: true };

        return null;
    };

    positiveValue = (control: AbstractControl) => {
        if (control.value === undefined || control.value === null) return null;

        if (
            isNaN(parseFloat(control.value)) &&
            isFinite(control.value) &&
            (control.value != undefined || control.value != '')
        )
            return { numeric: true };

        if (control.value < 0) return { positiveValue: true };

        return null;
    };

    twoDecimalPlaces = (control: AbstractControl) => {
        if (control.value === undefined || control.value === null) return null;

        // Check if it's a number
        if (
            isNaN(parseFloat(control.value)) &&
            isFinite(control.value) &&
            (control.value != undefined || control.value != '')
        )
            return { numeric: true };

        let str: string = control.value.toString();

        // Looks for decimal
        if (!str.includes('.')) return null;

        str = str.substring(str.lastIndexOf('.'));
        if (str.length > 3) return { twodecimals: true };

        return null;
    };

    ssn = ({ value }: AbstractControl) => {
        return value && value.match(/\d{9}|(\d{3}-\d{2}-\d{4})/)
            ? null
            : { ssn: true };
    };

    zip = ({ value }: AbstractControl) => {
        if (value && value.match(/^\d{5}$/)) return null;
        else return { zip: true };
    };
}
