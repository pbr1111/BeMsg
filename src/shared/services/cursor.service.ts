import { LoadingController, Loading, LoadingOptions } from 'ionic-angular';
import { Injectable } from "../../../node_modules/@angular/core";

const minLoadingMs: number = 500;
const loadingConf: LoadingOptions = {
    spinner: 'crescent',
    cssClass: 'custom-loading-cursor'
};

@Injectable()
export class CursorService {
    private loading: Loading;
    private activeCount: number;
    private presentTime: number;
    private isDismising: boolean;

    constructor(private loadingCtrl: LoadingController) {
        this.setDefaultValues();
    }

    public show(): void {
        this.activeCount++;
        if (this.activeCount == 1) {
            this.loading = this.loadingCtrl.create(loadingConf);
            this.loading.present().then((a) => {
                this.presentTime = this.getCurrentTime();
            });
        }
    }

    public hide(): void {
        if (this.activeCount == 1 && !this.isDismising) {
            this.dismissCursor();
        }
    }

    private setDefaultValues(): void {
        this.activeCount = 0;
        this.presentTime = 0;
        this.isDismising = false;
    }

    private dismissCursor(): void {
        this.isDismising = true;
        if (!this.isMinimumTimeCompleted()) {
            setTimeout(() => this.dismissLoading(), minLoadingMs);
        } else {
            this.dismissLoading();
        }
    }

    private dismissLoading(): void {
        this.loading.dismissAll();
        this.setDefaultValues();
    }

    private getCurrentTime(): number {
        return Date.now();
    }

    private isMinimumTimeCompleted(): boolean {
        const currentTime = this.getCurrentTime();
        return this.presentTime >= (currentTime - minLoadingMs);
    }
}