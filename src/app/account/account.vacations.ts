import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-account-vacations',
  templateUrl: 'account.vacations.html',
  styleUrls: ['account.vacations.scss']
})
export class accountVacations implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit(){
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Messages Landing',
      message: `
                 <ul>
                 <li>this information will be interpolated in.</li>
                 <li>what does this button show if they've already redeemed it?</li>
                 <li>where is the page for special offers?</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
