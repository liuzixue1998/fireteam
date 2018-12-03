import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnePage } from '../one/one';
import { TwoPage } from '../two/two';
import { ThreePage } from '../three/three';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  threePage;
  onePage;
  twoPage;


  constructor(public navCtrl: NavController) {
    this.onePage=OnePage;
    this.twoPage=TwoPage;
    this.threePage=ThreePage;
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
 
}
