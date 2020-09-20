import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
// {
//     path:'',
//    redirectTo:'/homeLogin',
//     pathMatch:'full',
 
// },
 


{ 
  path: 'homeLogin', 
  loadChildren: () => import('./components/home-login/home-login.module').then(m => m.HomeLoginModule) 
},
{ 
  path: 'login', 
  loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) 
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
