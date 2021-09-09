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

  }



}
