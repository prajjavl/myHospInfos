import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/modules/home/home.component';
import { AllHospInfoComponent } from './components/modules/HospInfo/all-hosp-info/all-hosp-info.component';
import { CreateHospInfoComponent } from './components/modules/HospInfo/create-hosp-info/create-hosp-info.component';
import { UpdateHospInfoComponent } from './components/modules/HospInfo/update-hosp-info/update-hosp-info.component';
import { HospCommComponent } from './components/modules/HospInfo/all-hosp-info/hosp-comm/hosp-comm.component';
import { HospinfoDtlComponent } from './components/modules/HospInfo/all-hosp-info/hospinfo-dtl/hospinfo-dtl.component';
import { HospMasterComponent } from './components/modules/HospInfo/all-hosp-info/hosp-master/hosp-master.component';
import { AboutUsComponent } from './components/navbar/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'createInfo', component:CreateHospInfoComponent},
  { path: 'update/:hospId', component: UpdateHospInfoComponent},
  { path: 'hospInfo', component: AllHospInfoComponent, 
    children: [
    { path: 'hospMaster', component:  HospMasterComponent},
    { path: 'hospInfos', component: HospinfoDtlComponent },
    { path: 'hospComm', component: HospCommComponent },
    { path: '', redirectTo: 'hospMaster', pathMatch: 'full' },
  ]},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }