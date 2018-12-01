import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { DialoguePage } from '../dialogue/dialogue';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  commentPage;
  dialoguePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.commentPage = CommentPage;
    this.dialoguePage = DialoguePage;
  }

  pushComment(){
    this.navCtrl.push(CommentPage);
  }

  pushDialoguePage(){
    this.navCtrl.push(DialoguePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
