import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../my/my';
import { SigninPage } from '../signin/signin';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  myPage;signinPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myPage = MyPage;
    this.signinPage=SigninPage;
  }

  pushMyPage(){
    this.navCtrl.push(SigninPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
