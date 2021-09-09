import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private animationCtrl: AnimationController, public alertController: AlertController) {
  }

  ngOnInit() {
    this.createAnimation('.cloud', 'horizontal', '0', '1000', 100000);
    this.createAnimation('.cloud2', 'horizontal', '0', '1000', 200000);
    this.createAnimation('.cloud3', 'horizontal', '0', '1000', 300000);
    this.createAnimation('.cloud4', 'horizontal', '0', '1000', 100000);
    this.createAnimation('.cloud5', 'horizontal', '0', '1000', 200000);
    this.createAnimation('.cloud6', 'horizontal', '0', '-1000', 200000);
    this.createAnimation('.cloud7', 'horizontal', '0', '1000', 200000);
    this.createAnimation('.cloud8', 'horizontal', '0', '1000', 200000);
    this.createAnimation('.balloon', 'horizontal', '0', '1000',100000);
    this.createAnimation('.airplane', 'horizontal', '0', '-1000',50000);
    this.createAnimation('.sailboat', 'horizontal', '0', '-1000', 900000);
    this.createAnimation('.boat', 'horizontal', '0', '10000', 800000);
  }
  createAnimation(element: string,movementStyle: string, movementStart: string, movementEnd: string,duration: number) {
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
        .duration(duration)
        .iterations(Infinity)
        .fromTo('transform', 'rotate(' + movementStart + 'deg)', 'rotate(' + movementEnd + 'deg)');
      animation.play();
    }
    
  }


}
