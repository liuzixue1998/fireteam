import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NloginPage} from '../pages/nlogin/nlogin';
import {UserPage} from '../pages/user/user';
import {TxtmgPage} from '../pages/txtmg/txtmg';
import {TogetherPage} from '../pages/together/together';
import{FeedbackPage} from '../pages/feedback/feedback';
import {SearchPage} from '../pages/search/search';
import {VideoPage} from '../pages/video/video';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NloginPage,
    UserPage,
    TxtmgPage,
    TogetherPage,
    FeedbackPage,
    SearchPage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NloginPage,
    UserPage,
    TxtmgPage,
    TogetherPage,
    FeedbackPage,
    SearchPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
