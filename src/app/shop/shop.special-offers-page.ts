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
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Special Offers Page',
      message: `<ul>
      <li>Is the image area supposed to alternate between products or be images of the same product from differing views.</li>
      <li>If it's supposed to be differing views IT needs the full photo deck.</li>
      <li>If it's supposed to be alternating between products that doesn't make sense and like the vacations page there should be a page between here and the shop landing that shows the products.</li>
      <li>The only difference between this and the next screen in the deck is the button now says order now instead of apply. One assumes that if the user has purchasing power equal or greater than the cost of the
          item then it would just say order, is there no increase button? like if the user has applied but their PP is too small there would be a button to request an increase.</li>
    </ul>`,
      buttons: ['OK']
    });

    await alert.present();
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
