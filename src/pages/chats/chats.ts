import { Component } from '@angular/core';
import { PageService } from '../../shared/services/page.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
    selector: 'page-chats',
    templateUrl: 'chats.html'
})
export class ChatsPage {

    constructor(private page: PageService, private authentication: AuthenticationService) {

    }

    public logout(): void {
        this.page.wait();
        this.authentication.logout()
            .finally(() => this.page.continue())
            .subscribe();
    }
}
