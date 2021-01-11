import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subapp1mComponent } from './subapp1m.component';

const routes: Routes = [
  {path:'',component:Subapp1mComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subapp1mRoutingModule { }
