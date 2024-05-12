import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Compnents/main-layout/main-layout.component';
import { HeaderComponent } from './Compnents/header/header.component';

import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Compnents/home/home.component';
import { UsersDashboardComponent } from './Modules/user/Components/users-dashboard/users-dashboard.component';
import { UserDetailsComponent } from './Modules/user/Components/user-details/user-details.component';
import { LoadingComponent } from './Compnents/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    UsersDashboardComponent,
    UserDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
