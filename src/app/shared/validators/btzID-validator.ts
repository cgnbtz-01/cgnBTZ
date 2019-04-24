import {FormControl} from '@angular/forms';

export class BtzIDValidator {
    // Prueft die BTZ-ID auf illegale Zeichen.
    static containsIllegalChars(control: FormControl): any {
        if (control.value) {
            const regexp = new RegExp('^[\x00-\x09\x0b\x0c\x0e-\x1f]*$');
            if (regexp.test(control.value)) {
                return {illegalchars: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID auf Spaces.
    static containsSpaces(control: FormControl): any {
        if (control.value) {
            const regexp = new RegExp('\\s');
            if (regexp.test(control.value)) {
                return {containsspaces: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID ob es aus 10 Zahlen besteht.
    static containsTenDigits(control: FormControl): any {
        if (control.value) {
            const regexp = new RegExp('^[0-9]{10}$');
            if (regexp.test(control.value)) {
                return {contains10digits: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID auf unzulaessige Umlaute.
    static isInvalidOscareUsernameUmlauts(control: FormControl): any {
        if (control.value) {
            const regexUmlauts = new RegExp('[\xE4\xF6\xFC\xC4\xD6\xDC]');
            if (regexUmlauts.test(control.value)) {
                return {oscareFormatUmlauts: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID auf Sonderzeichen.
    static isInvalidOscareUsernameOnlyAllowedSymbols(control: FormControl): any {
        if (control.value) {
            const regexSymbols = new RegExp('^[\\w\\s\\\\.]*$');
            if (!regexSymbols.test(control.value)) {
                return {oscareFormatAllowedSymbols: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID auf Unterstriche.
    static isInvalidOscareUsernameTrailingUnderscores(control: FormControl): any {
        if (control.value) {
            if (
                control.value.startsWith('_') ||
                control.value.endsWith('_')
            ) {
                return {oscareFormatTrailingUnderscores: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID auf Leerzeichen am Anfang und am Ende.
    static isInvalidOscareUsernameTrailingSpacing(control: FormControl): any {
        if (control.value) {
            if (
                control.value.startsWith(' ') ||
                control.value.endsWith(' ')
            ) {
                return {oscareFormatTrailingSpacing: true};
            }
        }

        return null;
    }

    // Prueft die BTZ-ID auf Punkte am Anfang und am Ende.
    static isInvalidOscareUsernameContainsDots(control: FormControl): any {
        if (control.value) {
            if (
                control.value.startsWith('.') ||
                control.value.endsWith('.')
            ) {
                return {oscareFormatContainsDots: true};
            }
        }

        return null;
    }
}
