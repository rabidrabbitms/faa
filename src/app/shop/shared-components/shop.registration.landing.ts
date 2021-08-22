import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'shopregistrationlanding',
  templateUrl: 'shop.registration.landing.html',
  styleUrls: ['shop.registration.landing.scss']
})
export class shopRegistrationLandingPage implements OnInit  {

  constructor(
    public router: Router,
    private animationCtrl: AnimationController,
    public alertController: AlertController
  ) { }


  ngOnInit() {
    setTimeout(() => { this.showAlert(); }, 1000);

  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Registration Landing Page',
      message: `<ul>
      <li>This page is nearly identical for both cruises and resorts so the differences will be switched between when we have back end logic for what the user has selected</li>
      <li>what is this start registration supposed to be a link for?</li>
    </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
