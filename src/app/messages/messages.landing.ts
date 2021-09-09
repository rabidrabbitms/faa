import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messages-landing',
  templateUrl: 'messages.landing.html',
  styleUrls: ['messages.landing.scss']
})
export class messagesLanding implements OnInit {
  constructor(public alertController: AlertController, private location: Location) { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
 
  ngOnInit(){
  }

}
