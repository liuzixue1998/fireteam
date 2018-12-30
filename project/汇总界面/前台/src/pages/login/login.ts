import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { EnrollPage } from '../enroll/enroll';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'} )

  users;
  usersName = [];
  usersPassword = [];
  user;
  code;
  name:string;
  password:string;
  correct;
  key;
  man;
  tishi;
  public static t;
  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.http.get('http://192.168.142.144:8080/'+'users',{
      headers:new HttpHeaders({
      }),
    }).subscribe((data) => { // 监听
      this.users = data;
      LoginPage.t=this.name;
      //console.log(this.users);
      for(var i = 0;i<this.users.length;i++){
        this.usersName[i] = data[i].name;
        this.usersPassword[i] = data[i].password;
      }
      console.log(this.usersName,this.usersPassword);
    });
  }

  ionViewDidLoad() {
    
  }
  goEnroll(){
    this.navCtrl.push(EnrollPage,{
      title : '注册'
    });
    // console.log("EnrollPage");
  }  
  goTabs(){
    this.navCtrl.push(TabsPage);
  }

  //post
doPost(){
  for(var i in this.usersName){
    if(this.usersName[i] == this.name){
      this.code = this.usersPassword[i];
      //console.log(this.code)
    }
  }
  if(this.password == this.code && this.code){
    //console.log(this.password)
    this.navCtrl.push(TabsPage, this.user);
    this.key = localStorage.setItem('key','ok');
    this.man = localStorage.setItem('man',this.man);
  }else{
    this.tishi='用户名错误';
    console.log('err');
  }
}



// presentPrompt(str) {
//   let alert = this.alertCtrl.create({
//     title: '登录失败',
//     subTitle:str+'，请重新输入。',
//     buttons: [
//       {
//         text: '确认',
//         role: 'cancel',
//         handler: data => {
//           // console.log('Confirm clicked');
//         }
//       }
//     ]
//   });
//   alert.present();
// }
}
