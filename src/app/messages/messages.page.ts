import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.page.html',
  styleUrls: ['messages.page.scss']
})
export class messagesPage implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  ngOnInit() {
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Messages',
      message: `
                 <ul>
                 <li>This is the only point in the app so far where payment and increase of purchasing power is mentioned. seems like there would be a module for that some where.</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }

}
