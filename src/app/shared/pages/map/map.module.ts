import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MapPage} from './map.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TranslateModule.forChild(),
        RouterModule.forChild([{path: '', component: MapPage}])
    ],
    declarations: [MapPage]
})

export class MapPageModule {
}
