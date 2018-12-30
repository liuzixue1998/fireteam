import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditorPage } from '../editor/editor';

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
  editorPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.editorPage=EditorPage;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SettingPage');
  }
  pushEditor(){
    this.navCtrl.push(this.editorPage);
  }
}
