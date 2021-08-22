import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'prequalify-income',
  templateUrl: 'prequalify.income.html',
  styleUrls: ['prequalify.income.scss']
})

export class PrequalifyIncomePage implements OnInit {
  constructor(private animationCtrl: AnimationController, public alertController: AlertController, private formBuilder: FormBuilder, private location: Location) {
  }
  form = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    VerifyPassword: ['', Validators.required],
    Zip: ['', Validators.required]
  });

  states: Array<any>
  infoShow: boolean = false;

  ngOnInit() {
    //this.createAnimation('.chat1', '', '0', '5', 950);
    setTimeout(() => { this.showAlert(); }, 1000);
  }

  createAnimation(element: string, movementStyle: string, movementStart: string, movementEnd: string, duration: number) {
       const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration).keyframes([
          { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);
      animation.play();
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Purchasing Power',
      message: `
                 <ul>
                 <li>The pay cycle info, NMI info and help will be put in later</li>
                 <li>There is no place to put a debit card in? the question is asked but nothing is done with that information?</li>
                 <li>Why isn't this just one page combined with the previous?<li>
                 </ul>`,
      buttons: ['OK']
    });

    await alert.present();
  }
  back() {
    this.location.back()
  }

}
