import { LocaleService } from './locale.service';
import { AlertController, LoadingController, NavController, Loading, App } from 'ionic-angular';
import { Injectable } from "@angular/core";

const minLoadingMs: number = 1000;

@Injectable()
export class PageService {
    loading: Loading;
    navCtrl: NavController;

    constructor(private app: App,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        public locale: LocaleService) {
            
        this.navCtrl = app.getActiveNav();
    }

    public showLoading(dissmissOnPageChange: boolean = false): void {
        this.loading = this.loadingCtrl.create({
            content: this.locale.getTranslation("pleaseWait"),
            dismissOnPageChange: dissmissOnPageChange
        });
        this.loading.present();
    }

    public hideLoading(): void {
        setTimeout(() => this.loading.dismissAll(), minLoadingMs);
    }

    public showError(text: string) {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
            title: this.locale.getTranslation("fail"),
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
}