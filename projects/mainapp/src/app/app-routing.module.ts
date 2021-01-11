import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'subapp1',
    loadChildren: () => 
      import('../../../subapp1/src/app/features/subapp1m/subapp1m.module').then(m => m.Subapp1mModule),
  },
  {
    path:'app2',
    loadChildren: () =>
      import('../../../subapp2/src/app/features/features.module').then(m => m.FeaturesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
