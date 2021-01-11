import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subapp1mRoutingModule } from './subapp1m-routing.module';
import { Subapp1mComponent } from './subapp1m.component';


@NgModule({
  declarations: [Subapp1mComponent],
  imports: [
    CommonModule,
    Subapp1mRoutingModule
  ]
})
export class Subapp1mModule { }
