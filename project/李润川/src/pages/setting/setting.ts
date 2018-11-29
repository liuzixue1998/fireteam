import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { QuestionPage } from '../question/question';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  accountPage;
  questionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accountPage = AccountPage;
    this.questionPage = QuestionPage;
  }

  pushAccountPage(){
    this.navCtrl.push(AccountPage);
  }

  pushQuestionPage(){
    this.navCtrl.push(QuestionPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
