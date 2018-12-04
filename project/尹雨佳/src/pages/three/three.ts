import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-three',
  templateUrl: 'three.html',
})
export class ThreePage {
  searchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchPage=SearchPage;
  }

  ionViewDidLoad() {
    
  }
  pushSearch(){
    this.navCtrl.push(this.searchPage);
  }
  close(){
    this.navCtrl.pop();
  }
}
