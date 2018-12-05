import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  isActive=1;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {

  }
 
}
