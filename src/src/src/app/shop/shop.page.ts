import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})
export class shopPage implements OnInit {

  constructor(
    public router: Router,
    private animationCtrl: AnimationController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    //this.showAlert2();
  }


  async showAlert2() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      subHeader: 'First Avenue VIP!',
      message: `Where do you want to get started?<br /><ul><li>Prequalify for Buying power</li><li>Take a look at our vacations, cruises or special offers just for you.</li></ul>`,
      buttons: ['Browse Around', 'Prequalify']
    });
    await alert.present();
  }
}
