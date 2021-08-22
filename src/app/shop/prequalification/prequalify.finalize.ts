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
    setTimeout(() => { this.showAlert(); }, 1000);
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Purchasing Power',
      message: `
                 <ul>
                 <li>It's assumed that this would route back to the shop on button click</li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  routeHome() {
    console.log("fucking what")
    this.router.navigate(['tabs/tabs/shop'])
  }
  back() {
    this.location.back()
  }
}
