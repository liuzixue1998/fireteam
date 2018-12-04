import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnePage } from '../one/one';
import { TwoPage } from '../two/two';
import { ThreePage } from '../three/three';
import { Geolocation } from '@ionic-native/geolocation';
import { SearchPage } from '../search/search';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchPage;
  threePage;
  onePage;
  twoPage;


  constructor(public navCtrl: NavController,private geolocation: Geolocation) {
    this.onePage=OnePage;
    this.twoPage=TwoPage;
    this.threePage=ThreePage;
    this.searchPage=SearchPage;
  }
  push(){
    this.navCtrl.push(this.onePage);
  }
  pushTwo(){
    this.navCtrl.push(this.twoPage);
  }
  pushThree(){
    this.navCtrl.push(this.threePage);
  }
  pushSearch(){
    this.navCtrl.push(this.searchPage);
  }
 
 
  public getGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude,resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }
}
