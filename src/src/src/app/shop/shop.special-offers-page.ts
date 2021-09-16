import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'shop-special-offers-page',
  templateUrl: './shop.special-offers-page.html',
  styleUrls: ['./shop.special-offers-page.scss'],
})
export class SpecialOffersPage implements OnInit {
  public total: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;


  constructor(public alertController: AlertController
  ) { }

  ngOnInit() {

    const deadline = Date.parse('September 1 2021 23:59:59 GMT+0200');
    const date = new Date();
    const total = deadline - Date.parse(date.toDateString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    this.total = total;
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
  }
  
  async showAlert2() {
      const alert = await this.alertController.create({
        header: 'Congratulations!',
        subHeader: 'Your product will be available at your neighborhood [STORE BRAND], [STORE ADDRESS]',
        message: 'They will call you when its ready!',
        buttons: ['OK']
      });
    await alert.present();
  }
}
