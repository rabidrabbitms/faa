import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController, AnimationController, NavController } from '@ionic/angular';


@Component({
  selector: 'cruises',
  templateUrl: 'shop.cruises.html',
  styleUrls: ['shop.cruises.scss']
})

export class shopCruisesPage implements OnInit {
  public total: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;


  constructor(private animationCtrl: AnimationController,
    public alertController: AlertController, public navCtrl: NavController,
    private domSanitizer: DomSanitizer) { }

  trustedVideoUrl: SafeResourceUrl;
  array_of_objects = [{
    vid_link: "https://www.youtube.com/embed/eIn5wvn6XZ4"
  }]



  ngOnInit() {
    for (let i of this.array_of_objects) {
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.vid_link);
    }

    const deadline = Date.parse('September 1 2021 23:59:59 GMT+0200');
    const date = new Date();
    const total = deadline - Date.parse(date.toDateString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    this.total = total;
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
  }
  
}
