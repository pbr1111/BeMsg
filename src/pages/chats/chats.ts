import { Component } from '@angular/core';
import { PageService } from '../../shared/services/page.service';

@Component({
    selector: 'page-chats',
    templateUrl: 'chats.html'
})
export class ChatsPage {

    constructor(private page: PageService) {

    }

}
