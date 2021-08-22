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
    setTimeout(() => { this.showAlert(); }, 1000);

  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Shop Page',
      message: 'This is the main landing page. The photo assets should be sized the same before being given to IT.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
