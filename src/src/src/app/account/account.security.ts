import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-security',
  templateUrl: 'account.security.html',
  styleUrls: ['account.security.scss']
})
export class accountSecurity implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit() {
  }
  async face() {
    const alert = await this.alertController.create({
      header: `Do you want to allow 
    “First Avenu”
    to use Face ID ?`,
      subHeader: 'Enabling Face ID allows you quick and secure access to your account.',
      buttons: ["Don't Allow","OK"]
    });
    await alert.present();
  }
}
