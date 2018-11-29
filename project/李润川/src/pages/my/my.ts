import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectionPage } from '../collection/collection';
import { PostsPage } from '../posts/posts';
import { SettingPage } from '../setting/setting';
import { AccountPage } from '../account/account';
/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  collectionPage;
  postsPage;
  settingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.collectionPage = CollectionPage;
    this.postsPage = PostsPage;
    this.settingPage = SettingPage;
  }

  pushCollectionPage(){
    this.navCtrl.push(CollectionPage);
  }
  
  pushPostsPage(){
    this.navCtrl.push(PostsPage);
  }

  pushSettingPage(){
    this.navCtrl.push(SettingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
