import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-coupons',
  templateUrl: 'account.coupons.html',
  styleUrls: ['account.coupons.scss']
})
export class accountCoupons implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Coupons Landing',
      message: `
                 <ul>
                 <li>if its a new api we're using this is gonna be a bit of a beast...</li>
                 <li>its a photo right now we'll get the full thing built in later.</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
