import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAppComponent } from './Components/customer-app/customer-app.component';
import { HomeViewComponent } from './Components/home-view/home-view.component';
import { SupplierPageComponent } from './Components/supplier-page/supplier-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeViewComponent },
  { path: 'Customers', component: CustomerAppComponent },
  { path: 'Suppliers', component: SupplierPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
