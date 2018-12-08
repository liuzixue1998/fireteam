import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{UserPage}from '../user/user';
import{TxtmgPage} from '../txtmg/txtmg';
import{TogetherPage} from '../together/together';
import {FeedbackPage} from '../feedback/feedback';
import {SearchPage} from '../search/search';
import{HomePage} from '../home/home'
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

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
  gotogether(){
    this.navCtrl.push(TogetherPage);
  }
  gosearch(){
    this.navCtrl.push(SearchPage);
  }
  gofeed(){
    this.navCtrl.push(FeedbackPage);
  }
}
