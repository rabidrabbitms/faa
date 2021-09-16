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

  }


}

