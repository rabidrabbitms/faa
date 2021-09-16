import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'prequalify-terms',
  templateUrl: 'prequalify.terms.html',
  styleUrls: ['prequalify.terms.scss']
})

export class PrequalifyTermsPage implements OnInit {
  constructor(private animationCtrl: AnimationController, public alertController: AlertController, private formBuilder: FormBuilder, private domSanitizer: DomSanitizer) {
  }

  trustedVideoUrl: SafeResourceUrl;
  array_of_objects = [{
    link: "https://oneweekgetaway.com/"
  }]

  ngOnInit() {
    this.createAnimation('.chat1', '', '0', '5', 950);
    for (let i of this.array_of_objects) {
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.link);
    }
  }

  createAnimation(element: string, movementStyle: string, movementStart: string, movementEnd: string, duration: number) {
    if (movementStyle == 'vertical') {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .iterations(Infinity)
        .easing('ease-in')
        .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
      animation.play();
    }
    if (movementStyle == 'horizontal') {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .iterations(Infinity)
        .easing('ease-in')
        .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
      animation.play();
    }
    else {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration).keyframes([
          { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);
      animation.play();
    }

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
      await alert.present();

    }
    if (type === "sod") {
      const alert = await this.alertController.create({
        header: 'Sharing Of Data',
        message: ` I expressly authorize First-Avenu and its affiliates to share among them any transaction history related to my financial products or services received through First-Avenu or serviced by First-Avenu
            for the purpose of evaluating me for credit.`,
        buttons: ['OK']
      });
      await alert.present();

    }
    if (type === "pda") {
      const alert = await this.alertController.create({
        header: 'Purchase Disclosure Agreement',
        message: `You agree that we may obtain and verify your employment income, address(es), telephone number(s), and all other information about you with other creditors, credit reporting agencies, service providers,
            employers, financial references, courts and government agencies.You understand and agree: (1) that we may obtain consumer reports about you for purposes of reviewing your credit application;
            and (2) that, if we extend credit to you, we may also obtain consumer reports about you in the future for purposes of reviewing, updating, renewing, collecting and / or servicing your extension
            of credit and for other legitimate purposes permitted by law. We will, if you request, inform youwhether we obtained a consumer report about you and tell you the name and address of any consumer
            reporting agency that provided any such consumer report.`,
        buttons: ['OK']
      });
      await alert.present();

    }
    if (type === "sms") {
      const alert = await this.alertController.create({
        header: 'Marketing Policy',
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
