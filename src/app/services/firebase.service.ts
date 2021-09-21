import { Injectable } from "@angular/core";
//import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import UserService from "./user.service";
import { error } from "@angular/compiler/src/util";
import SocialUser from "../../MLC/Types/SocialUser";

@Injectable({ providedIn: 'root' })
export class FirebaseService {

    constructor(
        public afAuth: AngularFireAuth,
        public userService: UserService
    ) { }
    async login(network: string): Promise<{ User, Token } | undefined> {
        const socialUser: SocialUser | undefined = await this.connect(network);
        if (socialUser)
            return this.userService.login({ Network: socialUser.Network?.Name, Token: socialUser.Token });
    }
    async logout() {
        await this.afAuth.signOut();
    }
    async link(network: string): Promise<SocialUser | undefined> {
        console.log(network);
        const socialUser = await this.connect(network);
        if (socialUser)
            return await this.userService.link(socialUser);
    }
    async connect(network: string): Promise<SocialUser | undefined> {
        let response: firebase.auth.UserCredential | undefined;
        switch (network.toLowerCase()) {
            case "facebook":
                const facebook = new firebase.auth.FacebookAuthProvider();
                response = await this.afAuth.signInWithPopup(facebook);
                break;
            case "google":
                const google = new firebase.auth.GoogleAuthProvider();
                google.addScope('profile');
                google.addScope('email');
                response = await this.afAuth.signInWithPopup(google);
                break;
            case "microsoft":
                const microsoft = new firebase.auth.OAuthProvider('microsoft.com');
                microsoft.setCustomParameters({
                    tenant: 'a1e2acbf-3740-47a4-b85d-8091510dec80'
                });
                response = await this.afAuth.signInWithPopup(microsoft);
                break;
            case "apple":
                return await this.apple();
            case "twitter":
                return await this.twitter();
            default:
                throw new Error(`unknown network ${network}`);
        }
        if (response) {
            const profile: any = response.additionalUserInfo?.profile;
            console.log(profile);
            if (profile)
                return {
                    User: {
                        Person: {
                            FirstName: profile.first_name,
                            MiddleName: profile.middle_name,
                            LastName: profile.last_name
                        }
                    },
                    Network: {
                        Name: network
                    },
                    Token: profile.id
                } as SocialUser;
        }
    }
    async twitter(): Promise<SocialUser | undefined> {
        const provider = new firebase.auth.TwitterAuthProvider();
        const response = await this.afAuth.signInWithPopup(provider);
        if (response) {
            console.log(response);
            const profile: any = response.additionalUserInfo?.profile;
            console.log(profile);
            if (profile) {
                const result = {
                    User: {
                        Person: {
                            FirstName: profile.first_name,
                            MiddleName: profile.middle_name,
                            LastName: profile.last_name
                        }
                    },
                    Network: {
                        Name: "Twitter"
                    },
                    Token: profile.id
                } as SocialUser;
                console.log(result);
                return result;
            }
        }
        throw new Error("twitter login failed");
        //const result: SocialUser | undefined = await this.connect(provider);
        //if (socialUser)
        //    return this.userService.login({ Network: socialUser.Network?.Name, Token: socialUser.Token });
    }
    async apple(): Promise<SocialUser | undefined> {

        const provider = new firebase.auth.OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');
        console.log("apple()");
        //const response = await this.afAuth.signInWithPopup(provider);
        //console.log(response);
        this.afAuth.signInWithRedirect(provider).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
        //const response = await this.afAuth.signInWithPopup(provider);
        //console.log("apple()");
        //if (response) {
        //    console.log(response);
        //    const profile: any = response.additionalUserInfo?.profile;
        //    console.log(profile);
        //    if (profile) {
        //        const result = {
        //            User: {
        //                Person: {
        //                    FirstName: profile.first_name,
        //                    MiddleName: profile.middle_name,
        //                    LastName: profile.last_name
        //                }
        //            },
        //            Network: {
        //                Name: "Twitter"
        //            },
        //            Token: profile.id
        //        } as SocialUser;
        //        console.log(result);
        //        return result;
        //    }
        //}
        throw new Error("apple login failed");
    }

    //doFacebookLogin() {
    //  return new Promise<any>((resolve, reject) => {
    //    console.log(firebase);
    //    const provider = new firebase.auth.FacebookAuthProvider();
    //    this.afAuth
    //      .signInWithPopup(provider)
    //      .then(res => {
    //        console.log(res);
    //        resolve(res);
    //      }, err => {
    //        console.log(err);
    //        reject(err);
    //      })
    //  })
    //}
}
