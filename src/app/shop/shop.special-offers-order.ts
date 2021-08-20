import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'shop-special-offers-order',
  templateUrl: './shop.special-offers-order.html',
  styleUrls: ['./shop.special-offers-order.scss'],
})
export class SpecialOffersOrder implements OnInit {
  public total: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  private accordion_expanded = false;
  private items = [
    { 'name': 'item 1' },
    { 'name': 'item 2' },
    { 'name': 'item 3' },
    { 'name': 'item 4' },
    { 'name': 'item 5' },
    { 'name': 'item 6' },
    { 'name': 'item 7' },
    { 'name': 'item 8' }
  ]
  constructor(
    public alertController: AlertController
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
  private toggle_accordion() {
    this.accordion_expanded = this.accordion_expanded === false;
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      subHeader: 'Your product will be available at your neighborhood [STORE BRAND], [STORE ADDRESS]',
      message: 'They will call you when its ready!',
      buttons: ['OK']
    });

    await alert.present();
  }


}
