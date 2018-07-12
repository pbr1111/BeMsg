import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

    constructor(public afAuth: AngularFireAuth) {

    }

    public getUserLoggedIn(): Observable<boolean> {
        return this.afAuth.authState.map(user => {
            return user != null;
        })
    }

    public loginUser(email: string, password: string): Observable<boolean> {
        return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password))
            .map(result => {
                return true;
            });
    }

    public logout(): Observable<void> {
        return Observable.fromPromise(this.afAuth.auth.signOut());
    }
}