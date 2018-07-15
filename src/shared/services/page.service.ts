import { CursorService } from './cursor.service';
import { LocaleService } from './locale.service';
import { AlertController} from 'ionic-angular';
import { Injectable } from "@angular/core";

@Injectable()
export class PageService {
    constructor(private alertCtrl: AlertController,
        private cursor: CursorService,
        public locale: LocaleService) {
            
    }

    public wait(): void {
        this.cursor.show();
    }

    public continue(): void {
        this.cursor.hide();
    }

    public showError(text: string): void {
        let alert = this.alertCtrl.create({
            title: this.locale.getTranslation("fail"),
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
}