import { Injectable } from '@angular/core';
import { Global } from './Global';
import ModelService from './model.service';
import Person from '../../MLC/Types/Person';
import { Router } from '@angular/router';
import HttpService from './http.service';
import { WebcamUtil } from 'ngx-webcam';

@Injectable({ providedIn: 'root' })
export default class RegistrationService {
    constructor(
        readonly global: Global,
        readonly modelService: ModelService,
        readonly router: Router,
        readonly httpService: HttpService
    ) { }

    async hasWebCam() {
        const cams = await WebcamUtil.getAvailableVideoInputs();
        if (cams && cams.length > 0)
            return true;
        return false;
    }

    currentStep: RegistrationStep | undefined;
    async getRegistrationStep(): Promise<RegistrationStep> {
        if (this.currentStep === undefined) {
            this.currentStep = "stageOne";
            const goToMinuteID = await this.hasWebCam();
            if (goToMinuteID)
                this.currentStep = "minuteID";
            return this.currentStep;
        }

        switch (this.currentStep) {
            case "minuteID":
                this.currentStep = "completed";
                break;
            case "stageOne":
                this.currentStep = "stageTwo";
                break;
            case "stageTwo":
                this.currentStep = "completed";
                break;
        }

        let person: Person;
        if (this.global.User) {
            person = await this.getPerson();
            if (this.missingIncome(person) || this.missingBankAccounts(person))
                this.currentStep = "stageTwo";
        }

        return this.currentStep;
    }

    getStateAndCityByZip(zipCode: number): Promise<{ City: string, StateCode: string }> {
        return this.httpService.get({ controller: "Registration", method: `CityAndStateByZip?zipcode=${zipCode}` });
    }

    //TEMP
    isRegistering = () => this.router.url === "/register";

    private getPerson = () => this.modelService.byID('Person', this.global.personID, { Income: true, DebitCards: true, BankAccounts: true, Addresses: true });
    private missingIncome = (person: Person) => (person.Income?.length ?? 0) < 1;
    private missingBankAccounts = (person: Person) => (person.BankAccounts?.length ?? 0) < 1;
}
export type RegistrationStep = 'minuteID' | 'stageOne' |  'stageTwo' | 'completed';