import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchPage;

  isActive=1;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {
    this.searchPage=SearchPage;

  }
  push(){
    this.navCtrl.push(SearchPage);
  }
}
