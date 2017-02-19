import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing pages
import { Page404Component } from './404-page.component';

const page404Routes: Routes = [
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(page404Routes)],
  exports: [
    RouterModule
  ],
  declarations: [
    Page404Component
  ],
  providers: []
})
export class Page404Module { }
