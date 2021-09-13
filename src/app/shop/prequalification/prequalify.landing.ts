import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Location} from '@angular/common'

@Component({
  selector: 'prequalify-landing',
  templateUrl: 'prequalify.landing.html',
  styleUrls: ['prequalify.landing.scss']
})

export class PrequalifyLandingPage implements OnInit {
  constructor(private animationCtrl: AnimationController, public alertController: AlertController, private location: Location, private formBuilder: FormBuilder) {
  }
  form = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    VerifyPassword: ['', Validators.required],
    Zip: ['', Validators.required]
  });

  states: Array<any>
  infoShow: boolean = false;

  ngOnInit() {
    this.createAnimation('.chat1', '', '0', '5', 950);
    this.states = ['VA','DE','MS','NV','UT' ]
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
  async open() {
      const alert = await this.alertController.create({
        header: 'Terms',
        message: `You agree that we may obtain and verify your employment income, address(es), telephone number(s), and all other information about you with other
				creditors, credit reporting agencies, service providers, employers, financial references, courts and government agencies.You understand and agree:
          (1) that we may obtain consumer reports about you for purposes of reviewing your credit application; (2) that, if we extend credit to you, we may
    also obtain consumer reports about you in the future for purposes of reviewing, updating, renewing, collecting and / or servicing your extension of
    credit and for other legitimate purposes permitted by law; and(3) We may report information about your account to credit bureaus.Late payments,
      missed payments, or other defaults on your account may be reflected in your credit report.We will, if you request, inform you whether we obtained a
    consumer report about you and tell you the name and address of any consumer reporting agency that provided any such consumer report.`,
        buttons: ['OK']
      });
      await alert.present();
    }
}
