import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
/**
 * Generated class for the TogetherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-together',
  templateUrl: 'together.html',
})

export class TogetherPage {
  feedbackPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feedbackPage = FeedbackPage;
  }

  pushfeedbackPage(){
    this.navCtrl.push(FeedbackPage);
  }

  isActive = 0;
  isclick(i){
    this.isActive = i;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TogetherPage');
  }

}
