import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'nav',
  templateUrl: 'nav.html',
  styleUrls: ['nav.scss']
})
export class NavPage {

  constructor(private location: Location) {}
  back() {
    this.location.back()
  }
}
