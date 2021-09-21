import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import HttpService from "./http.service";

@Injectable({ providedIn: 'root' })
export default class VouchedIDService {
    constructor(readonly httpService: HttpService) { }

    private readonly url = 'https://verify.vouched.id/api';
    private readonly headers = {
        "X-Api-Key": "KWS.LW!EZMM#cuNVl*GEh4~UcRt!EO", //Is this a proper way to store a key?
        "Content-Type": "application/json"
    };

    idVerification(userPhoto: string, idPhoto: string): Promise<VouchedIDResponse | undefined> {
        return this.httpService.post(
            { controller: "Service", method: "VouchedID" },
            { UserPhoto: userPhoto, IDPhoto: idPhoto }
        );
    }

    private readonly threshold_ = 90;
    get threshold() { return this.threshold_; }

    private mostRecentResponse_?: VouchedIDResponse;
    get mostRecentResponse() { return this.mostRecentResponse_; }
}

export interface VouchedIDResponse {
    id: string;
    result: VouchedIDResult;
}
interface VouchedIDResult {
    id: string;

    firstName: string;
    middleName: string;
    lastName: string;

    dob: Date;
    expireDate: Date;
    issueDate: Date;
    birthDate: Date;

    class: string;
    endorsements: string;
    motorcycle?;

    gender: VouchedIDGender;
    idAddress: VouchedIDAddress;
    confidences: VouchedIDConfidences;
}
interface VouchedIDGender {
    gender: string;
    genderDistribution: {
        woman: number;
        man: number;
    };
}
interface VouchedIDAddress {
    streetNumber: string;
    street: string;
    city: string;
    state: string; //state code
    country: string; //country code
    postalCode: string;
    postalCodeSuffix: string;
}
interface VouchedIDConfidences {
    id: number;
    idQuality: number;
    idExpired: number;
    idGlareQuality: number;
    selfie: number;
    selfieSunglasses: number;
    selfieEyeglasses: number;
    faceMatch: number;
}
