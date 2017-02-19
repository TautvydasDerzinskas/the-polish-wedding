import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
