import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'prequalify-terms',
  templateUrl: 'prequalify.terms.html',
  styleUrls: ['prequalify.terms.scss']
})

export class PrequalifyTermsPage implements OnInit {
  constructor(private animationCtrl: AnimationController, public alertController: AlertController, private formBuilder: FormBuilder) {
  }
  
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
      header: 'Terms and Conditions',
      message: `
<ul>
<li>Are These linked items supposed to be links to an external website? one inside the app? a download?</li>
<li>One assumes that when I agree is clicked it routes to the second prequalification screen, is that true? what happens if they disagree?</li>
</ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
