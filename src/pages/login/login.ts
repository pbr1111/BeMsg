import { PageService } from '../../shared/services/page.service';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;

    constructor(private page: PageService,
        private authentication: AuthenticationService,
        private fb: FormBuilder) {

        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.page.wait();
        setTimeout(() => this.page.continue(), 2000);
    }

    public login() {
        this.page.wait();
        let data = this.loginForm.value;

        this.authentication.loginUser(data.email, data.password)
            .subscribe({ 
                error: error => this.page.showError(error),
                complete: () => this.page.continue()
            });
    }
}
