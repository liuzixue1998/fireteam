import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { SignupPage } from '../signup/signup';
import { MyPage } from '../my/my';
import { AccountPage } from '../account/account';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
ret(){
  this.navCtrl.push(AccountPage);
}
signup(){
  this.navCtrl.push(SignupPage);
}
myy(){
  this.navCtrl.push(MyPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
