import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SigninPage } from '../signin/signin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyPage } from '../my/my';

/**
 * Generated class for the EditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})
export class EditorPage {
  titleTitle: any;
  private headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'} )
  username;
  signature;

  logForm() {
  console.log('username',this.username);
  this.http.post('http://192.168.137.144:8080/'+'my',{
    "signature":this. signature,
    "username":this.username,
  },{
    headers:this.headers,
  }).subscribe((data)=>{
    // this.tel=RegisterPage.t;
    console.log('data',data);
    // this.id=data;
    // -1 数据不完整  0 成功
    // switch(data){
    //   case 1:
    //     this.presentPrompt('用户名重复');
    //     break;
      
    //   case 0:
    //     this.goHome();
    //     break;
    // }
    this.navCtrl.push(MyPage);
  })
}
  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.titleTitle =this.navParams.get('title');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditorPage');
  }
  ionViewWillEnter() { //page初始化时
    this.username=SigninPage.t;
  }
  presentPrompt(str) {
    console.log(str);
    let alert = this.alertCtrl.create({
      title: '添加失败',
      subTitle:str+'，请重新输入。',
      buttons: [
        {
          text: '确认',
          role: 'cancel',
          handler: data => {
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
  }
  goHome(){
    // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
    // this.navCtrl.popToRoot();
   
    // console.log('1',this.tel);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '是否要保存草稿？',
      
      buttons: [
        {
          text: '否',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: '是',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
 
}
