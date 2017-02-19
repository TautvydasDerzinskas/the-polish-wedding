import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedPageComponentsModule } from '../../app.shared.module';

// Importing pages
import { LithuanianPageComponent } from './lithuanian-page.component';

const lithuanianPageRoutes: Routes = [
  {
    path: 'lithuanian',
    component: LithuanianPageComponent
  }
];

@NgModule({
  imports: [
    SharedPageComponentsModule,
    RouterModule.forChild(lithuanianPageRoutes)],
  exports: [
    RouterModule
  ],
  declarations: [
    LithuanianPageComponent
  ],
  providers: []
})
export class LithuanianPageModule { }
