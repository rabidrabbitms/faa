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
    setTimeout(() => { this.showAlert(); }, 1000);
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
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Purchasing Power',
      message: 'There is some confusion here with the link on the bottom, there is a registration page that does not carry the address, Phone, Social or Birthdate at the begining of the process. If we are not pushing them through the whole process on registration then link at the bottom does not make sense since they are already "registered" but not "prequalified" if the processes are seperate (initial registration and then prequalification) then the only things that need to be on this page are the things not picked up on initial registration. The info button on SSN will show the reason in subsequent versions.',
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
