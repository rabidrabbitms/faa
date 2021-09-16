import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'prequalify-finalize',
  templateUrl: 'prequalify.finalize.html',
  styleUrls: ['prequalify.finalize.scss']
})

export class PrequalifyFinalizePage implements OnInit {
  constructor( public alertController: AlertController,private location: Location, private router: Router) {
  }
 
  states: Array<any>
  infoShow: boolean = false;

  ngOnInit() {
  }

  routeHome() {
    console.log("fucking what")
    this.router.navigate(['tabs/tabs/shop'])
  }
  back() {
    this.location.back()
  }
}
