import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing pages
import { Page404Component } from './pages/404-page/404-page.component';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
