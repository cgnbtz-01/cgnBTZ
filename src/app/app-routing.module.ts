import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './shared/pages/tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'login',
        loadChildren: './modules/pages/auth/pages/login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        loadChildren: './modules/pages/home/home.module#HomePageModule'
    },
    {
        path: 'folder',
        loadChildren: './shared/pages/folder/folder.module#FolderPageModule'
    },
    {
        path: 'map',
        loadChildren: './shared/pages/map/map.module#MapPageModule'
    },
    {
        path: 'news',
        loadChildren: './shared/pages/news/news.module#NewsPageModule'
    },
    {
        path: 'options',
        loadChildren: './shared/pages/options/options.module#OptionsPageModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
