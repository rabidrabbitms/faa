import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-info',
  templateUrl: 'account.info.html',
  styleUrls: ['account.info.scss']
})
export class accountInfo implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Messages Landing',
      message: `
                 <ul>
                 <li>There is no info page in the deck</li>
                 <li>There is no bank and debit card info page in the deck</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
