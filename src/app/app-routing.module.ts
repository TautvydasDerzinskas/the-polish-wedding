import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPageComponent } from './intro-page/intro-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: IntroPageComponent
  },
  {
    path: 'info/:language',
    children: [],
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
