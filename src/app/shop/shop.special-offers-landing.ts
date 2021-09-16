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
  specialOffersImages = [
    { img: '../assets/SpecialOffers-1.jpg' },
    { img: '../assets/SpecialOffers-2.jpg' },
    { img: '../assets/SpecialOffers-3.jpg' }
  ];
  specialOffersImage;
  specialOffersImage2;
  ngOnInit() {
    this.specialOffersImage = this.specialOffersImages[Math.floor(Math.random() * this.specialOffersImages.length)];
    this.specialOffersImage2 = this.specialOffersImages[Math.floor(Math.random() * this.specialOffersImages.length)];
  }


}

