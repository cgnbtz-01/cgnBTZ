import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {UserLogin} from '../models/user-login';
import {Teilnehmer} from '../../../../shared/models/teilnehmer';
import {StorageService} from '../../../../shared/services/storage.service';
import {UserSession} from '../models/user-session';
import {Events} from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = ''; // muss eingetragen werden

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    static userSession: UserSession = new UserSession();
    private teilnehmer: Teilnehmer;
    private LoggedInTeilnehmer = new BehaviorSubject<Teilnehmer>(null);

    constructor(private _http: HttpClient, private _storageService: StorageService, private _events: Events) {
    }

    initAuth() {
        this._storageService
            .getSecure(StorageService.KEY_TEILNEHMER)
            .then((data: Teilnehmer) => {
                this._events.publish('UserLoggedIn', data);
                AuthService.userSession.isUserLoggedIn = true;
                AuthService.userSession.btzID = data.btzID;
                this.LoggedInTeilnehmer.next(data);
            })
            .catch((err) => {
                console.warn('Can not get user from secure storage');
                AuthService.userSession.isUserLoggedIn = false;
            });
    }

    logIn(userLogin: UserLogin): boolean {
        if (userLogin.btzID === 'Agent007' && userLogin.password === 'Start2019') {
            const teilnehmer = this.mockTeilnehmer();
            this._events.publish('UserLoggedIn', teilnehmer);
            this.LoggedInTeilnehmer.next(teilnehmer);
            this._storageService.set(StorageService.KEY_TEILNEHMER, teilnehmer);
            AuthService.userSession.btzID = teilnehmer.btzID;
            AuthService.userSession.isUserLoggedIn = true;
            this.teilnehmer = teilnehmer;
            return AuthService.userSession.isUserLoggedIn;
        } else {
            this._events.publish('UserLoggedIn', null);
            this.LoggedInTeilnehmer.next(null);
            this.logOut();
        }
        return false;
    }

    logOut(): void {
        this._storageService.removeSecure(StorageService.KEY_TEILNEHMER);
        AuthService.userSession.isUserLoggedIn = false;
        AuthService.userSession.btzID = undefined;
        this.teilnehmer = undefined;
        this._storageService.clearStorage();
        this._events.publish('UserLoggedIn', null);
    }

    hasLoggedInTeilnehmer(): boolean {
        return AuthService.userSession.isUserLoggedIn;
    }

    getLoggedInTeilnehmer(): Teilnehmer {
        return this.teilnehmer;
    }

    getLoggedInBtzIDFromSession(): string {
        return AuthService.userSession.btzID;
    }

    mockTeilnehmer(): Teilnehmer {
        const mockTeilnehmer = new Teilnehmer();
        mockTeilnehmer.btzID = 'Agent007';
        mockTeilnehmer.name = 'James';
        mockTeilnehmer.vorname = 'Bond';
        mockTeilnehmer.geburtsdatum = '01.01.1970';
        mockTeilnehmer.geschlecht = 'M';
        return mockTeilnehmer;
    }

    teilnehmerAsObservable(): Observable<Teilnehmer> {
        return this.LoggedInTeilnehmer.asObservable();
    }
}
