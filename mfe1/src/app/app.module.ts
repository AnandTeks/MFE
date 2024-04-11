import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { CarSearchComponent } from './cars/car-search/car-search.component';
import { CarsModule } from './cars/cars.module';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CarSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CarsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    console.log("NG bootstrap initalized")
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    console.log("*****",ce)
    customElements.define('mfe1-element', ce);
  }
}
