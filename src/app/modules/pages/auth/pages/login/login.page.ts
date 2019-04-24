import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoadingController} from '@ionic/angular';

import {UserLogin} from '../../models/user-login';
import {BtzIDValidator} from '../../../../../shared/validators/btzID-validator';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})

export class LoginPage {
    loginForm: FormGroup;
    submitAttempt = false;

    constructor(
        private authSrv: AuthService,
        private statusBar: StatusBar,
        private loadingCtrl: LoadingController,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            btzID: [
                '',
                Validators.compose([
                    Validators.required,
                    BtzIDValidator.containsSpaces,
                    BtzIDValidator.containsTenDigits,
                    BtzIDValidator.containsIllegalChars
                ])
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required
                ])
            ]
        });
    }

    login(): void {
        this.submitAttempt = true;

        if (this.loginForm.valid) {
            const userlogin = this.loginForm.value as UserLogin;

            if (this.authSrv.logIn(userlogin) !== undefined) {
                this.router.navigate(['/tabs/home']);
            }
        }
    }
}
