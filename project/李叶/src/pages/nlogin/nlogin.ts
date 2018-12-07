import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
/**
 * Generated class for the NloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nlogin',
  templateUrl: 'nlogin.html',
})
export class NloginPage {
  items = [];
  isActive=0;
  isClick(i){
    this.isActive = i;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  gohome(){
    this.navCtrl.push(HomePage);
  }

}
