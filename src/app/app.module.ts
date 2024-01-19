import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllHospInfoComponent } from './components/modules/HospInfo/all-hosp-info/all-hosp-info.component';
import { UpdateHospInfoComponent } from './components/modules/HospInfo/update-hosp-info/update-hosp-info.component';
import { CreateHospInfoComponent } from './components/modules/HospInfo/create-hosp-info/create-hosp-info.component';
import { HeaderComponent } from './components/navbar/header/header.component';
import { FooterComponent } from './components/navbar/footer/footer.component';
import { HomeComponent } from './components/modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HospinfoDtlComponent } from './components/modules/HospInfo/all-hosp-info/hospinfo-dtl/hospinfo-dtl.component';
import { HospCommComponent } from './components/modules/HospInfo/all-hosp-info/hosp-comm/hosp-comm.component';
import { HospMasterComponent } from './components/modules/HospInfo/all-hosp-info/hosp-master/hosp-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/navbar/about-us/about-us.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AllHospInfoComponent,
    UpdateHospInfoComponent,
    CreateHospInfoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HospinfoDtlComponent,
    HospCommComponent,
    HospMasterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
