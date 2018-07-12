import { Component } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { Contacts, Contact } from '@ionic-native/contacts';
import { PageService } from '../../shared/services/page.service';
import { IContact } from '../../shared/models/contacts/contact.model';

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html'
})
export class ContactsPage {
    userContacts: Array<IContact> = [];

    constructor(private page: PageService, private contacts: Contacts, private sanitizer: DomSanitizer) {
        this.loadContactsFromDevice();
    }

    private loadContactsFromDevice(): void {
        this.page.showLoading();
        this.contacts.find(['displayName', 'photos', 'phoneNumbers'], { multiple: true })
            .then(this.onLoadContactsCompleted);
    }

    private onLoadContactsCompleted(contactsList: Array<Contact>): void {
        if (contactsList != null) {
            for (let contact of contactsList) {
                if (contact.displayName != null) {
                    let phone = contact.phoneNumbers != null && contact.phoneNumbers.length > 0 ?
                        contact.phoneNumbers[0].value
                        : null;
                    let photoUrl: string | SafeValue = "assets/imgs/user.svg";
                    if (contact.photos != null && contact.photos.length > 0) {
                        photoUrl = this.sanitizer.bypassSecurityTrustUrl(contact.photos[0].value);
                    } 
                    this.userContacts.push({
                        displayName: contact.displayName,
                        photoUrl: photoUrl,
                        phone: phone
                    });
                }
            }
        }
        this.page.hideLoading();
    }
}
