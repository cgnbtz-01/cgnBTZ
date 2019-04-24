import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    public static CONST_ACTIVE_DOCUMENT = 'upload.document.active';
    public static CONST_DOCUMENT_BY_ID = 'upload.document.';
    public static CONST_IMAGES_BY_ID = 'upload.images.';
    public static CONST_ALL_DOCUMENTS = 'all.upload.document';
    public static CONST_PRELOGIN_CONTENT = 'prelogin.content';
    public static CONST_STORAGE_NEWSLIST = 'news.list';
    public static KEY_TEILNEHMER = 'btz.app.teilnehmer';
    public static CONST_MAILBOX_ITEMS = 'mailbox.item.';
    public static CONST_MAILBOX_LIST = 'mailbox.list';
    public static CONST_CONTACTSUBJECTS = 'contact.subjects';
    public static CONST_USER_SETTINGS = 'user.settings.';
    public static CONST_PRIVACY_POLICY = 'rechtstexte';

    constructor(private storage: Storage) {
    }

    getSecure(key: string): Promise<any> {
        return new Promise((resolve) => {
            this.storage.get(key).then((data) => {
                resolve(JSON.parse(data));
            }).catch(
                (err) => console.error(err)
            );
        });
    }

    setSecure(key: string, value: any): void {
        this.storage.set(key, JSON.stringify(value))
            .catch((err) => console.error(err));
    }

    removeSecure(key: string): void {
        this.storage.remove(key).catch((err) => console.error(err));
    }

    get(key: string): Promise<any> {
        return new Promise((resolve) => {
            this.storage.get(key).then((data) => {
                resolve(JSON.parse(data));
            }).catch(
                (err) => console.error(err)
            );
        });
    }

    set(key: string, value: any): void {
        this.storage.set(key, JSON.stringify(value))
            .catch((err) => console.error(err));
    }

    remove(key: string): any {
        this.storage.remove(key)
            .catch((err) => console.error(err));
    }

    clearStorage(): void {
        this.storage.clear().then( res => {
            return res;
        });
    }
}
