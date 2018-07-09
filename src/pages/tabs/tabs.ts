import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { ChatsPage } from '../chats/chats';
import { ITabItem } from '../../shared/models/tabs/tabitem.model';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tabs: Array<ITabItem>;

    constructor() {
        this.setTabs();
    }

    private setTabs(): void {
        this.tabs = [
            { title: "chats", icon: "chatbubbles", page: ChatsPage },
            { title: "contacts", icon: "contacts", page: ContactsPage }
        ]
    }
}
