import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TxtmgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-txtmg',
  templateUrl: 'txtmg.html',
})
export class TxtmgPage {
  isActive=0;
  isclick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TxtmgPage');
  }

}
