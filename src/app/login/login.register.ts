import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-register',
  templateUrl: './login.register.html',
  styleUrls: ['./login.register.scss'],
})
export class LoginRegister implements OnInit {

  constructor(private animationCtrl: AnimationController, public alertController: AlertController, private formBuilder: FormBuilder ) {
  }
  form = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    VerifyPassword: ['', Validators.required],
    Zip:['',Validators.required]
  });


  ngOnInit() {
    this.createAnimation('.chat1', '', '0', '5', 950);
    setTimeout(() => { this.showAlert(); }, 1000);
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
      header: 'registration',
      message: 'all the fields have form validation and are required. They are optimized by for autofill on devices (not shown here because web demos are dumb). For this demo you can skip ahead and click the buttons or links to continue',
      buttons: ['OK']
    });

    await alert.present();
  }

}
