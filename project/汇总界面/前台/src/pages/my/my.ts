import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SettingPage } from '../setting/setting';
import { HttpHeaders, HttpClient } from '@angular/common/http';




@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  private headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'} )
  settingPage;
  man: string;
  username;
  signature;
  my;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.settingPage=SettingPage;
    this.man = localStorage.getItem('man');
  }
  ionViewWillEnter(){
    this.http.get('http://192.168.142.144:8080/'+'my',{
      headers:new HttpHeaders({
      }),
    }).subscribe((data)=>{
      this.my=data;
      LoginPage.t=this.username;
        this.username = data[0].username;
        this.signature = data[0].signature;
      console.log(this.username,this.signature);
    });
  }
 
  pushSetting(){
    this.navCtrl.push(this.settingPage);
  }


}
