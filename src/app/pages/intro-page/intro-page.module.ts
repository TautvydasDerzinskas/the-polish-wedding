import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroPageComponent } from './intro-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IntroPageComponent
  ],
  exports: [
    IntroPageComponent
  ]
})
export class IntroPageModule { }
