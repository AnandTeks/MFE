import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CAR_SEARCH } from './cars.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CAR_SEARCH)
  ]
})
export class CarsModule { }
