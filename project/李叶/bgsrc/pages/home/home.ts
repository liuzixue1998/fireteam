import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NloginPage} from '../nlogin/nlogin';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(NloginPage);
  }
}
