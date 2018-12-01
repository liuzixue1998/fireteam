import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  settingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settingPage = SettingPage;
  }

  pushSettingPage(){
    this.navCtrl.push(SettingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

}
