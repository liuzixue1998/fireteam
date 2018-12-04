import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { MessagePage } from '../message/message';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = AddPage;
  tab4Root = MessagePage;
  tab5Root = MyPage;

  constructor() {

  }
}
