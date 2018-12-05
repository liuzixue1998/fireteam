import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FeedbackPage } from '../feedback/feedback';
import { TogetherPage } from '../together/together';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  feedbackPage;
  togetherPage;
  constructor(public navCtrl: NavController) {
    this.feedbackPage = FeedbackPage;
    this.togetherPage = TogetherPage;
  }

  pushfeedbackPage(){
    this.navCtrl.push(FeedbackPage);
  }

  pushtogetherPage(){
    this.navCtrl.push(TogetherPage);
  }
}
