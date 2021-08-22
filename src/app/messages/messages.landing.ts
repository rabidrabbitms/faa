import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messages-landing',
  templateUrl: 'messages.landing.html',
  styleUrls: ['messages.landing.scss']
})
export class messagesLanding implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
 
  ngOnInit(){
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Messages Landing',
      message: `
                 <ul>
                 <li>The notifications can be turned on at registration as well</li>
                 <li>The information about messaging does not have a corresponding page</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }
}
