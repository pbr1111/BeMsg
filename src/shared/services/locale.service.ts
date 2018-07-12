import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig, TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const defaultLanguage = 'en';

@Injectable()
export class LocaleService {

    constructor(private translate: TranslateService) { }

    public initialize(): void {
        this.translate.setDefaultLang(defaultLanguage);   
        this.setBrowserLanguage();  
    }

    public getTranslation(key: string): string {
        return this.translate.instant(key);
    }

    private setBrowserLanguage(): void {
        let browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang);
    }
}

export function createTranslateModuleConfig(): TranslateModuleConfig {
    return {
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }
}

export function createTranslateLoader(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}