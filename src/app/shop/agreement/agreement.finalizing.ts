import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'agreement-finalizing',
  templateUrl: 'agreement.finalizing.html',
  styleUrls: ['agreement.finalizing.scss']
})

export class AgreementFinalizingPage implements OnInit {
  constructor(private route: Router) {
  }
  approved: boolean = false;


  async ngOnInit() {
    await this.delay(10000);
    this.route.navigate(['tabs/tabs/shop']);
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

