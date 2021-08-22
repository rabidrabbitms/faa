import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';


@Component({
  selector: 'gataways',
  templateUrl: 'shop.getaways.html',
  styleUrls: ['shop.getaways.scss']
})

export class shopGetawaysPage implements OnInit {
  public total: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  
  constructor(private animationCtrl: AnimationController,
    public alertController: AlertController) {  }

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
      header: 'Resort Page',
      message: `<ul>
      <li> This image is very blury at this resoloution</li>
      <li>The count down will be built to actually count down from the back end. </li>
      <li>Is there a page in between here and the next? in the documents given to IT it jumps from here to the confirmation page. (scroll for more)</li>
      <li> are images / sections in the easy steps to take section supposed to lead to a corresponding action? </li>
    </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
