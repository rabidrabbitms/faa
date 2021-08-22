import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'vacations',
  templateUrl: 'shop.vacations.html',
  styleUrls: ['shop.vacations.scss']
})
export class shopVacationsPage implements OnInit {

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
      header: 'Vacations Page',
      message: 'The photo assets should be sized the same before being imported. The Pre-qualify me button will go away once there is logic and a back end to globally see if a user is prequalified',
      buttons: ['OK']
    });

    await alert.present();
  }

}

