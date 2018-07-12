import { Component } from '@angular/core';
import { Contacts, Contact } from '@ionic-native/contacts';
import { PageService } from '../../shared/services/page.service';

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html'
})
export class ContactsPage {
    userContacts: Array<Contact>;

    constructor(private page: PageService, private contacts: Contacts) {
        this.loadContactsFromDevice();
    }

    private loadContactsFromDevice(): void {    
        this.contacts.find(['*']).then(this.onLoadContactsCompleted);
    }

    private onLoadContactsCompleted(contactsList: Array<Contact>): void {
        this.userContacts = contactsList;
    }
}
