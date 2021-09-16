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
  vacationImages = [
    { img: '../assets/Vacations-1.jpg' },
    { img: '../assets/Vacations-2.jpg' },
    { img: '../assets/Vacations-3.jpg' },
    { img: '../assets/Vacations-4.jpg' },
    { img: '../assets/Vacations-5.jpg' },
    { img: '../assets/Vacations-6.jpg' },
    { img: '../assets/Vacations-7.jpg' }
  ];
  cruisesImages = [
    { img: '../assets/Cruises-1.jpg' },
    { img: '../assets/Cruises-2.jpg' },
    { img: '../assets/Cruises-3.jpg' },
    { img: '../assets/Cruises-4.jpg' },
    { img: '../assets/Cruises-5.jpg' },
    { img: '../assets/Cruises-6.jpg' }
  ];
  cruisesImage;
  vacationsImage;
  ngOnInit() {
    this.cruisesImage = this.cruisesImages[Math.floor(Math.random() * this.cruisesImages.length)];
    this.vacationsImage = this.vacationImages[Math.floor(Math.random() * this.vacationImages.length)];
  }


}

