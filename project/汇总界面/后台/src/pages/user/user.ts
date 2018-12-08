import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TxtmgPage} from '../txtmg/txtmg';
import {TogetherPage} from '../together/together';
import {FeedbackPage} from '../feedback/feedback';
import {SearchPage} from '../search/search';
import{VideoPage} from '../video/video';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  isActive=1;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gohome(){
    this.navCtrl.push(HomePage);
  }
  gotxtmg(){
    this.navCtrl.push(TxtmgPage);
  }
  gotogether(){
    this.navCtrl.push(TogetherPage);
  }
  gofeedback(){
    this.navCtrl.push(FeedbackPage);
  }
  gosearch(){
    this.navCtrl.push(SearchPage);
  }
  govideo(){
    this.navCtrl.push(VideoPage);
  }

}
