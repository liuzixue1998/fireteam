import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {UserPage} from '../user/user'
import {TxtmgPage} from '../txtmg/txtmg';
import {TogetherPage} from '../together/together';
import {FeedbackPage} from '../feedback/feedback';
import {VideoPage} from '../video/video';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

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
  gofeedback(){
    this.navCtrl.push(FeedbackPage);
  }
  govideo(){
    this.navCtrl.push(VideoPage);
  }

}
