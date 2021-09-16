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
  vacationImages = [
    { img: '../assets/Vacations-1.jpg' },
    { img: '../assets/Vacations-2.jpg' },
    { img: '../assets/Vacations-3.jpg' },
    { img: '../assets/Vacations-4.jpg' },
    { img: '../assets/Vacations-5.jpg' },
    { img: '../assets/Vacations-6.jpg' },
    { img: '../assets/Vacations-7.jpg' },
    { img: '../assets/Cruises-1.jpg' },
    { img: '../assets/Cruises-2.jpg' },
    { img: '../assets/Cruises-3.jpg' },
    { img: '../assets/Cruises-4.jpg' },
    { img: '../assets/Cruises-5.jpg' },
    { img: '../assets/Cruises-6.jpg' }
  ];
  specialOffersImages = [
    { img: '../assets/SpecialOffers-1.jpg' },
    { img: '../assets/SpecialOffers-2.jpg' },
    { img: '../assets/SpecialOffers-3.jpg' }
  ];
  specialOffersImage;
  vacationsImage;
  ngOnInit() {
    //this.showAlert2();
    this.specialOffersImage = this.specialOffersImages[Math.floor(Math.random() * this.specialOffersImages.length)];
    this.vacationsImage = this.vacationImages[Math.floor(Math.random() * this.vacationImages.length)];
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
