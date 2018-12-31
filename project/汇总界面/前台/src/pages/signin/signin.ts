import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { SignupPage } from '../signup/signup';
//import { MyPage } from '../my/my';
import { AccountPage } from '../account/account';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';

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
    this.http.get('http://192.168.137.144:8080/'+'users',{
      headers:new HttpHeaders({
      }),
    }).subscribe((data) => { // 监听
      this.users = data;
      //console.log(this.users);
      for(var i = 0;i<this.users.length;i++){
        this.usersName[i] = data[i].name;
        this.usersPassword[i] = data[i].password;
      }
      console.log(this.usersName,this.usersPassword);
    });
  }
ret(){
  this.navCtrl.push(AccountPage);
}
signup(){
  this.navCtrl.push(SignupPage);
}
// myy(){
//   //this.navCtrl.push(MyPage);
// }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SigninPage');
  }
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
      this.tishi='用户名或密码错误';
    }
  }
}

