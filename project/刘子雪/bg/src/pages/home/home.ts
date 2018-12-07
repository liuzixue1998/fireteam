import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TxtmgPage } from '../txtmg/txtmg';
import { LivePage } from '../live/live';
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
live(){
  this.navCtrl.push(LivePage);
}
}
