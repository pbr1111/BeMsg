import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LocaleService } from '../shared/services/locale.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, locale: LocaleService) {
    platform.ready().then(() => {
      locale.initialize();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
