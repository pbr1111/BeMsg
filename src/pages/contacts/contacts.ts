import { Component } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { Contacts, Contact } from '@ionic-native/contacts';
import { PageService } from '../../shared/services/page.service';
import { IContact } from '../../shared/models/contacts/contact.model';
import { ArrayHelper } from '../../shared/helpers/array.helper';
import { normalizeURL } from 'ionic-angular';

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html'
})
export class ContactsPage {
    userContacts: Array<IContact> = [];

    constructor(private page: PageService, private contacts: Contacts, private sanitizer: DomSanitizer) {

    }

    ionViewDidLoad(): void {
        this.loadContactsFromDevice();
    }

    private loadContactsFromDevice(): void {
        this.page.wait();
        this.contacts.find(['displayName', 'photos', 'phoneNumbers'], { multiple: true })
            .then(contactList => this.onLoadContactsCompleted(contactList));
    }

    private onLoadContactsCompleted(contactsList: Array<Contact>): void {
        if (contactsList != null) {
            for (let contact of contactsList) {
                if (contact.displayName != null && contact.phoneNumbers != null && contact.phoneNumbers.length > 0) {
                    let phone = contact.phoneNumbers[0].value;
                    let photoUrl: string | SafeValue = "assets/imgs/user.svg";
                    if (contact.photos != null && contact.photos.length > 0) {
                        photoUrl = this.sanitizer.bypassSecurityTrustUrl(normalizeURL(contact.photos[0].value));
                    }
                    this.userContacts.push({
                        displayName: contact.displayName,
                        photoUrl: photoUrl,
                        phone: phone
                    });
                }
            }
        }
        if (this.userContacts.length > 0) {
            this.userContacts = ArrayHelper.sort(this.userContacts, contact => contact.displayName);
        }
        this.page.continue();
    }
}
