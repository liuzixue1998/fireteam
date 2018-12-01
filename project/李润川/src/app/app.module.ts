import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message';
import { CommentPage } from '../pages/comment/comment';
import { DialoguePage } from '../pages/dialogue/dialogue';
import { MyPage } from '../pages/my/my';
import { CollectionPage } from '../pages/collection/collection';
import { PostsPage } from '../pages/posts/posts';
import { SettingPage } from '../pages/setting/setting';
import { AccountPage } from '../pages/account/account';
import { QuestionPage } from '../pages/question/question';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MessagePage,
    CommentPage,
    DialoguePage,
    MyPage,
    CollectionPage,
    PostsPage,
    SettingPage,
    AccountPage,
    QuestionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MessagePage,
    CommentPage,
    DialoguePage,
    MyPage,
    CollectionPage,
    PostsPage,
    SettingPage,
    AccountPage,
    QuestionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
