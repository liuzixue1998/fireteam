import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the EnrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enroll',
  templateUrl: 'enroll.html',
})
export class EnrollPage {
  private headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'} )
  name;
  password;
  
   logForm() {
    console.log(this.name);
    console.log(this.password);
    this.http.post('http://192.168.142.144:8080/'+'users',{
      "name":this.name,
      "password":this.password,
    },{
        headers:this.headers,
      }).subscribe((data)=>{
      console.log(data);
        //跳转到tabs页并将用户tel传给tabs
        // this.app.getRootNavs()[0].setRoot(TabsPage,{username:this.tel});
        this.navCtrl.push(LoginPage);
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

  ionViewDidLoad() {
    
  }
  goTabs(){
    this.navCtrl.push(TabsPage);
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
 

presentPrompt(str) {
  console.log(str);
  let alert = this.alertCtrl.create({
    title: '登录失败',
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
}
