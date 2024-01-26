import { Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basicPage/basicPage.component';
import { DynamicPageComponent } from './pages/dynamicPage/dynamicPage.component';
import { SwitchesPageComponent } from './pages/switchesPage/switchesPage.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicPageComponent
      },
      {
        path: 'dynamic',
        component: DynamicPageComponent
      },
      {
        path: 'switches',
        component: SwitchesPageComponent
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ]
  },
];
