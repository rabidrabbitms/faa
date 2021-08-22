import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-refer',
  templateUrl: 'account.refer.html',
  styleUrls: ['account.refer.scss']
})
export class accountRefer implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
   setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Refer Landing',
      message: `
                 <ul>
                 <li>is this a new referral service? if we're doing a new back end entirely it will be.</li>
                 <li>it is an image right now for demo purposes. we'll get the rest in later.</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
