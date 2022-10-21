import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {FacilityComponent} from './facility/facility.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';
import {ContractComponent} from './contract/contract.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ViewMoreComponent} from './view-more/view-more.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home/customer', component: CustomerComponent},
  {path: 'home/customer/create', component: CreateCustomerComponent},
  {path: 'home/customer/edit', component: EditCustomerComponent},
  {path: 'home/facility', component: FacilityComponent},
  {path: 'home/facility/create', component: CreateFacilityComponent},
  {path: 'home/facility/edit', component: EditFacilityComponent},
  {path: 'home/contract', component: ContractComponent},
  {path: 'home/contract/create', component: CreateContractComponent},
  {path: 'home/view-more', component: ViewMoreComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
