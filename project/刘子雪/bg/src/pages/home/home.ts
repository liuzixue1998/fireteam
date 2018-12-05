import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TxtmgPage } from '../txtmg/txtmg';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
txt(){
  this.navCtrl.push(TxtmgPage);
}
}
