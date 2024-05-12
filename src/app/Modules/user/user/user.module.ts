import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from '../Components/users-dashboard/users-dashboard.component';
import { UserDetailsComponent } from '../Components/user-details/user-details.component';


const routes:Routes =[
  { path: '', component: UsersDashboardComponent },
  { path: ':id', component: UserDetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserModule { }
