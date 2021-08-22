import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-help',
  templateUrl: 'account.help.html',
  styleUrls: ['account.help.scss']
})
export class accountHelp implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Messages Landing',
      message: `
                 <ul>
                 <li>Email who?</li>
                 <li>Call Who?</li>
                 <li>There is no faq sheet in the deck</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
