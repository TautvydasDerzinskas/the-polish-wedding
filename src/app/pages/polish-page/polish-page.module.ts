import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedPageComponentsModule } from '../../app.shared.module';

// Importing pages
import { PolishPageComponent } from './polish-page.component';


const polishPageRoutes: Routes = [
  {
    path: 'polish',
    component: PolishPageComponent
  }
];

@NgModule({
  imports: [
    SharedPageComponentsModule,
    RouterModule.forChild(polishPageRoutes)],
  exports: [
    RouterModule
  ],
  declarations: [
    PolishPageComponent
  ],
  providers: []
})
export class PolishPageModule { }
