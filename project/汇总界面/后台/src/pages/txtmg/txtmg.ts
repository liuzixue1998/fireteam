import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {UserPage} from '../user/user';
import {TogetherPage} from '../together/together';
import {FeedbackPage} from '../feedback/feedback';
import {SearchPage} from '../search/search';
import {VideoPage} from '../video/video'
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
  gohome(){
    this.navCtrl.push(HomePage);
  }
  gouser(){
    this.navCtrl.push(UserPage);
  }
  gotogether(){
    this.navCtrl.push(TogetherPage);
  }
  gofeed(){
    this.navCtrl.push(FeedbackPage);
  }
  gosearch(){
    this.navCtrl.push(SearchPage);
  }
  govideo(){
    this.navCtrl.push(VideoPage);
  }

}
