import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'special-offers-landing',
  templateUrl: 'shop.special-offers-landing.html',
  styleUrls: ['shop.special-offers-landing.scss']
})
export class shopSpecialOffersLandingPage implements OnInit {

  constructor(
    public router: Router,
    private animationCtrl: AnimationController,
    public alertController: AlertController
  ) { }

  ngOnInit() {

  }


}

