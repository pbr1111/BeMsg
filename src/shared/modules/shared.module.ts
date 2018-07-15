import { CursorService } from './../services/cursor.service';
import { PageService } from '../services/page.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Firebase } from '@ionic-native/firebase';
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LocaleService, createTranslateModuleConfig } from "../services/locale.service";
import { FirebaseService } from "../services/firebase.service";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../config/firebase.config';

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot(createTranslateModuleConfig()),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    exports: [
        TranslateModule
    ],
    providers: [
        LocaleService,
        Firebase,
        AngularFireAuth,
        AuthenticationService,
        FirebaseService,
        CursorService,
        PageService
    ]
})
export class SharedModule { }
