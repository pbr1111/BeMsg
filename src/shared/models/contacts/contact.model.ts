import { SafeValue } from '@angular/platform-browser';

export interface IContact {
    displayName?: string;
    photoUrl?: string | SafeValue;
    phone?: string;
}