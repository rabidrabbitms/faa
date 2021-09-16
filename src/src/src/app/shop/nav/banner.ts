import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Animation, AnimationController, AlertController  } from '@ionic/angular';

@Component({
  selector: 'banner',
  templateUrl: 'banner.html',
  styleUrls: ['banner.scss']
})
export class Banner implements OnInit  {

  constructor(private location: Location, private animationCtrl: AnimationController) {}

  banners = [{}];
  banner;
  ngOnInit() {
    this.createAnimation('.image', '', '5', '0', 4000)
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
        .duration(duration)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1) rotate(15deg)' },
          { offset: 1, transform: 'scale(1) rotate(0) ' }
        ]);
      animation.play();
    }

  }
}
