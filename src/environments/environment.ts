// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export default Object.freeze({
  endpointBaseUrl: 'http://localhost:59935/api',
  prod: false,
  verbose: false,
  staging: false,
  brand: 'MLC',
  facebookAppId: '448254406126516',
  networks: [
    {
      name: "Amazon",
      icons: ["amazon"],
      colors: ["#FF9900", "#000000"],
      auth: {
        url: "https://www.amazon.com/ap/oa"
      },
      applications: [
        {
          id: "amzn1.application-oa2-client.88d9acd5b2ee43cfb514432e433424a8",
          name: "Minute Loan Center"
        }
      ]
    },
    {
      name: "Apple",
      icons: ["apple"],
      colors: ["#A3AAAE", "#000000", "#F9F6EF"],
      auth: {
        url: ""
      },
      applications: [
        {
          id: "",
          name: "Minute Loan Center"
        }
      ]
    },
    {
      name: "Facebook",
      icons: ["facebook-f"],
      colors: ["#4267B2", "#FFFFFF"],
      auth: {
        url: "https://www.facebook.com/dialog/oauth"
      },
      applications: [
        {
          id: "530512884210518",
          name: "Minute Loan Center"

        }
      ]
    },
    {
      name: "Google",
      icons: ["google"],
      colors: ["#DB4437", "#4285F4", "#F4B400", "#0F9D58"],
      auth: {
        url: ""
      },
      applications: [
        {
          id: "1085291035515-nbrrd6jht8da5nhvb6e6bshv5r50knq4.apps.googleusercontent.com",
          name: "Minute Loan Center"
        }
      ]
    },
    {
      name: "Linked In",
      icons: ["linkedin-in"],
      colors: ["#2867B2", "#FFFFFF"],
      auth: {
        url: ""
      },
      applications: [
        {
          id: "",
          name: "Minute Loan Center"
        }
      ]
    },
    {
      name: "Twitter",
      icons: ["twitter"],
      colors: ["#1DA1F2", "#14171A", "#657786", "#AAB8C2", "#E1E8ED", "#F5F8FA", "#FFFFFF"],
      auth: {
        url: ""
      },
      applications: [
        {
          id: "",
          name: "Minute Loan Center"
        }
      ]
    }
  ]
});
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
