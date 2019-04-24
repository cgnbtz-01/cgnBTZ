import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})

export class HomePage {
    constructor(private router: Router) {
    }

    routing(page): void {
        switch (page) {
            case 'folder':
                this.router.navigate(['tabs/folder']);
                break;

            case 'map':
                this.router.navigate(['tabs/map']);
                break;

            case 'news':
                this.router.navigate(['tabs/news']);
                break;

            case 'options':
                this.router.navigate(['tabs/options']);
                break;

            default:
        }
    }
}
