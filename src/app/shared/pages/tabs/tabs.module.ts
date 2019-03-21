import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { LoginPageModule } from '../../../modules/pages/auth/pages/login/login.module';
import { HomePageModule } from '../../../modules/pages/home/home.module';
import { MapPageModule } from '../map/map.module';
import { OptionsPageModule } from '../options/options.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    LoginPageModule,
    HomePageModule,
    MapPageModule,
    OptionsPageModule
  ],
  declarations: [TabsPage]
})

export class TabsPageModule {}
