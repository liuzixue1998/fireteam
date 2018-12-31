import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { TabsPage } from '../tabs/tabs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  private headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'} )
  name;
  password;
  
   logForm() {
    console.log(this.name);
    console.log(this.password);
    this.http.post('http://192.168.137.144:8080/'+'users',{
      "name":this.name,
      "password":this.password,
    },{
        headers:this.headers,
      }).subscribe((data)=>{
      console.log(data);
        //跳转到tabs页并将用户tel传给tabs
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        this.navCtrl.push(SigninPage);
        console.log(this.name);
  
      // -1 用户名为空 -2 密码为空 0 成功 1 用户名重复
      // switch(data){
      //   case -1:
      //       this.presentPrompt('用户名不能为空');
      //       break;
        
      //   case -2:
      //       this.presentPrompt('密码不能为空');
      //       break;

      //   case 1:
      //       this.presentPrompt('用户名重复');
      //       break;
      //   case 0:
      //       this.goHome();
      //       break;
      // }
    })

}

  constructor(public app:App,public alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }
ret(){
  this.navCtrl.push(SigninPage);
}
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
  }
  goTabs(){
    this.navCtrl.push(TabsPage);
  }
  goLogin(){
    this.navCtrl.push(SigninPage);
  }
}
