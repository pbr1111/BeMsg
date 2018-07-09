import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LocaleService, createTranslateModuleConfig } from "../services/locale.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot(createTranslateModuleConfig())
    ],
    exports: [
        TranslateModule
    ],
    providers: [
        LocaleService
    ]
})
export class SharedModule { }
