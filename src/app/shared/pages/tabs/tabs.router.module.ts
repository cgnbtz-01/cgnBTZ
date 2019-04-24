import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'login',
        children: [
            {
                path: '',
                loadChildren: '../../../modules/pages/auth/pages/login/login.module#LoginPageModule'
            }
        ]
    },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../../../modules/pages/home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'folder',
                children: [
                    {
                        path: '',
                        loadChildren: '../folder/folder.module#FolderPageModule'
                    }
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: '../map/map.module#MapPageModule'
                    }
                ]
            },
            {
                path: 'news',
                children: [
                    {
                        path: '',
                        loadChildren: '../news/news.module#NewsPageModule'
                    }
                ]
            },
            {
                path: 'options',
                children: [
                    {
                        path: '',
                        loadChildren: '../options/options.module#OptionsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class TabsPageRoutingModule {
}
