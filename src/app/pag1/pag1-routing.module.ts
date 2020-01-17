import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pag1Page } from './pag1.page';

const routes: Routes = [
  {
    path: '',
    component: Pag1Page
  },
  {
    path: 'link1',
    loadChildren: () => import('./link1/link1.module').then( m => m.Link1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pag1PageRoutingModule {}
