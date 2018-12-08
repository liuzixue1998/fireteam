import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import{UserPage}from '../user/user';
import{TxtmgPage} from '../txtmg/txtmg';
import{TogetherPage} from '../together/together';
import {SearchPage} from '../search/search';
import{VideoPage} from '../video/video';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  gohome(){
    this.navCtrl.push(HomePage)
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
  govideo(){
    this.navCtrl.push(VideoPage);
  }
  isActive=0;
  isclick(i){
    this.isActive=i;
  }
}
