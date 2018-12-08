import { NgModule } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { NloginPage } from './nlogin';
import {HomePage} from '../home/home';
import {UserPage} from '../user/user';
import {TxtmgPage} from '../txtmg/txtmg';
import {TogetherPage} from '../together/together';
import {FeedbackPage} from '../feedback/feedback';
@NgModule({
  declarations: [
    NloginPage,
  ],
  imports: [
    IonicPageModule.forChild(NloginPage),
  ],
})
export class NloginPageModule {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gohome(){
    this.navCtrl.push(HomePage);
  }
  gouser(){
    this.navCtrl.push(UserPage);
  }
  gotxtmg(){
    this.navCtrl.push(TxtmgPage)
  }
  gotogether(){
    this.navCtrl.push(TogetherPage)
  }
  gofeedback(){
    this.navCtrl.push(FeedbackPage);
  }
}
