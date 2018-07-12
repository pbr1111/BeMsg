import { TabsPage } from '../pages/tabs/tabs';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocaleService } from '../shared/services/locale.service';
import { LoginPage } from '../pages/login/login';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = null;

    constructor(platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        locale: LocaleService,
        private authentication: AuthenticationService) {

        this.setRootPage();

        platform.ready().then(() => {
            locale.initialize();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    private setRootPage(): void {
        this.authentication.getUserLoggedIn().subscribe(
            isLoggedIn => this.rootPage = isLoggedIn ? TabsPage : LoginPage,
            () => this.rootPage = LoginPage
        );
    }
}
