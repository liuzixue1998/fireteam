import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NloginPage} from '../nlogin/nlogin';
import{UserPage}from '../user/user';
import{TxtmgPage} from '../txtmg/txtmg';
import{TogetherPage} from '../together/together';
import {FeedbackPage} from '../feedback/feedback';
import {SearchPage} from '../search/search';
import {VideoPage} from '../video/video';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(NloginPage);
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
  govideo(){
    this.navCtrl.push(VideoPage);
  }
}
