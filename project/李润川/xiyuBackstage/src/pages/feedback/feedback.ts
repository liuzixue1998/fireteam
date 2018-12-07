import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TogetherPage } from '../together/together';
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
  togetherPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.togetherPage = TogetherPage;
  }

  pushtogetherPage(){
    this.navCtrl.push(TogetherPage);
  }

  isActive=0;
  isclick(i){
    this.isActive=i;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
