import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'agreement-landing',
  templateUrl: 'agreement.landing.html',
  styleUrls: ['agreement.landing.scss']
})

export class AgreementLandingPage implements OnInit {
  constructor(public alertController: AlertController) {
  }
  ngOnInit() {

  }
  async open(type: string) {
    if (type === "pp") {
      const alert = await this.alertController.create({
        header: 'Privacy Policy!',
        message: `Financial companies choose how they share your personal information. Federal law gives consumers the right to limit
some but not all sharing. Federal law also requires us to tell you how we collect, share, and protect your personal information.
Please read this notice carefully to understand what we do.
The types of personal information we collect and share depend on the product or service you have with us. This information can include:
<ul>
<li>Social Security number and income</li>
<li>checking account information and employment information</li>
<li>credit history and payment history</li>
<li>When you are no longer our customer, we continue to share your information as described in this notice.</li>
</ul>All financial companies need to share customers’ personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers’ personal information; the reasons Minute Loan Center choose to share; and whether you can limit this sharing.
For our everyday business purposes –
such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus(sharing: Yes, Can you Limit this sharing?: No)
For our marketing purposes –
to offer our products and services to you (sharing: Yes, Can you Limit this sharing?: No)
For joint marketing with other financial companies	(sharing: Yes, Can you Limit this sharing?: No)
For our affiliates’ everyday business purposes –
information about your transactions and experiences (Sharing: NO, Can you Limit this sharing?: We Don't share)
For our affiliates’ everyday business purposes –
information about your creditworthiness (Sharing: NO, Can you Limit this sharing?: We Don't share)
For our affiliates to market to you (Sharing: NO, Can you Limit this sharing?: We Don't share)
For nonaffiliates to market to you (Sharing: NO, Can you Limit this sharing?: We Don't share)
To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. These measures include computer safeguards and secured files and buildings.
We collect your personal information, for example, when you
apply for a loan or give us your income information
provide employment information or give us your contact information
or provide account information
We also collect your personal information from others, such as credit bureaus, affiliates, or other companies.
Federal law gives you the right to limit only
sharing for affiliates’ everyday business purposes – information about your creditworthiness
affiliates from using your information to market to you
sharing for nonaffiliates to market to you
State laws and individual companies may give you additional rights to limit sharing. See below for more on your rights under state law.
Companies related by common ownership or control. They can be financial and nonfinancial companies. First-Avenu does not share with afiliates
Companies not related by common ownership or control. They can be financial and nonfinancial companies.
First-Avenu does not share with nonaffiliates so they can market to you.
A formal agreement between nonaffiliated financial companies that together market financial products or services to you.
Our joint marketing partners include insurance companies.
California Residents: If you live in California, we will not share information for our joint marketing partners to market to you, except with your express consent or as otherwise permitted by law.`,
        buttons: ['OK']
      });
    }
    if (type === "cda") {
      const alert = await this.alertController.create({
        header: 'Credit Disclosure Agreement!',
        message: `You agree that we may obtain and verify your employment income, address(es), telephone number(s), and all other information about you with other creditors, credit reporting agencies, service providers,
            employers, financial references, courts and government agencies.You understand and agree: (1) that we may obtain consumer reports about you for purposes of reviewing your credit application;
            and (2) that, if we extend credit to you, we may also obtain consumer reports about you in the future for purposes of reviewing, updating, renewing, collecting and / or servicing your extension
            of credit and for other legitimate purposes permitted by law. We will, if you request, inform youwhether we obtained a consumer report about you and tell you the name and address of any consumer
            reporting agency that provided any such consumer report.`,
        buttons: ['OK']
      });
      await alert.present();

    }
    if (type === "eca") {
      const alert = await this.alertController.create({
        header: 'Electronic Signature Agreement.',
        message: `By selecting the "I Accept" button, you are signing this Agreement electronically. You agree your electronic signature is the legal equivalent
            of your manual signature on this Agreement. By selecting "I Accept" you consent to be legally bound by this Agreement's terms and conditions. You further agree that your use of
            a key pad, mouse or other device to select an item, button, icon or similar act/action, or to otherwise provide {{global.brandCode}} or in accessing or making any
            transaction regarding any agreement, acknowledgement, consent terms, disclosures or conditions constitutes your signature (hereafter referred to as "E-Signature"), acceptance and
            agreement as if actually signed by you in writing. You also agree that no certification authority or other third party verification is necessary to validate your E-Signature and
            that the lack of such certification or third party verification will not in any way affect the enforceability of your E-Signature or any resulting contract between you and
            {{global.brandCode}}. You also represent that you are authorized to enter into this Agreement for all persons who own or are authorized to access any of your accounts
            and that such persons will be bound by the terms of this Agreement. You further agree that each use of your E-Signature in obtaining a {{global.brandCode}}	product or
            service constitutes your agreement to be bound by the terms and conditions of {{global.brandCode}}.
            <br />
            <b>2. Consent to Electronic Delivery.</b> You specifically agree to receive and/or obtain any and all {{global.brandCode}} related "Electronic Communications" (defined below)
            via Email or Text. The term "Electronic Communications" includes, but is not limited to, any and all current and future notices and/or disclosures that various federal and/or state
            laws or regulations require that we provide to you, as well as such other documents, statements, data, records and any other communications regarding your relationship with
            {{global.brandCode}}. You acknowledge that, for your records, you are able to use {{global.brandCode}} to retain Electronic Communications by printing and/or
            downloading and saving this Agreement and any other agreements and Electronic Communications, documents, or records that you agree to using your E-Signature. You accept Electronic
            Communications provided via email or text as reasonable and proper notice, for the purpose of any and all laws, rules, and regulations, and agree that such electronic form fully
            satisfies any requirement that such communications be provided to you in writing or in a form that you may keep.
            <br />
            <b>3. Paper version of Electronic Communications.</b> You may request a paper version of an Electronic Communication. You acknowledge that {{global.brandCode}} reserves the
            right to charge you a reasonable fee for the production and mailing of paper versions of Electronic Communications where allowed by law. To request a paper copy of an Electronic
            Communication contact us at 888-213-5744.
            <br />
            <b>4. Revocation of electronic delivery.</b> You have the right to withdraw your consent to receive/obtain communications via {{global.brandCode}} at any time. You acknowledge
            that {{global.brandCode}} reserves the right to restrict or terminate your access to future services if you withdraw your consent to receive Electronic Communications.
            If you wish to withdraw your consent, contact us at 888-213-5744.
            <br />
            <b>To obtain electronic services and communications, indicate your consent to the terms and conditions of this Agreement by clicking on the box and selecting the "I Agree" button.</b>
            <br /><br />
            It is recommended that you print a copy of this Agreement for future reference.`,
        buttons: ['OK']
      });
      await alert.present();

    }
    if (type === "sms") {
      const alert = await this.alertController.create({
        header: 'Communications Agreement',
        message: ` You expressly authorize us to communicate with you via email, text and phone for account information and marketing purposes. Receipt of cellular phone calls (including text messages) may be
            subject to service provider charges. If you have listed a cell phone number above or provide an updated cell phone number, then you authorize us to call (including sending SMS text messages)
            usingan automatic telephone dialing system or prerecorded message to your cell phone number to provide account information and services regarding your loan. We may follow up in order to assist
            you with completion of your application, address any technical problems associated in completing your application, notification of transaction approval, payment reminders and collection efforts.
            If you do not want to receive calls (including SMS text messages) about your transaction you can unsubscribe by calling a customer service representative at 888-213-5744.`,
        buttons: ['OK']
      });
      await alert.present();

    }
  }
 
}
