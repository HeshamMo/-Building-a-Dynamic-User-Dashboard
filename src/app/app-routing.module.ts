import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { HomeComponent } from './Compnents/home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard', 
    loadChildren: () => import('./Modules/user/user/user.module').then(m => m.UserModule)
  },
  {
    path:"notFound",component:NotFoundComponent
  },
  {
    path:"**",component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
