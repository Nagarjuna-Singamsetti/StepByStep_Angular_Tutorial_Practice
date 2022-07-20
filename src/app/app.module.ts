import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAppComponent } from './Components/customer-app/customer-app.component';
import { HomeViewComponent } from './Components/home-view/home-view.component';
import { MasterPageComponent } from './Components/master-page/master-page.component';
import { SupplierPageComponent } from './Components/supplier-page/supplier-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAppComponent,
    HomeViewComponent,
    MasterPageComponent,
    SupplierPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
