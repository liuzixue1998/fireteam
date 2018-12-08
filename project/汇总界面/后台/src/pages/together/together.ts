import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import{UserPage} from '../user/user';
import {TxtmgPage} from '../txtmg/txtmg';
import { FeedbackPage } from '../feedback/feedback';
import {SearchPage} from '../search/search';
import{VideoPage} from '../video/video'
/**
 * Generated class for the TogetherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-together',
  templateUrl: 'together.html',
})
export class TogetherPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gohome(){
    this.navCtrl.push(HomePage);
  }
  gouser(){
    this.navCtrl.push(UserPage);
  }
  gotxtmg(){
    this.navCtrl.push(TxtmgPage);
  }
  pushfeedbackPage(){
    this.navCtrl.push(FeedbackPage);
  }
  gosearch(){
    this.navCtrl.push(SearchPage);
  }
  govideo(){
    this.navCtrl.push(VideoPage);
  }
  isActive = 0;
  isclick(i){
    this.isActive = i;
  }

}
