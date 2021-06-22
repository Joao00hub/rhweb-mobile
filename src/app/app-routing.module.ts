import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-adm',
    loadChildren: () => import('./login-adm/login-adm.module').then( m => m.LoginAdmPageModule)
  },
  {
    path: 'login-funcionario',
    loadChildren: () => import('./login-funcionario/login-funcionario.module').then( m => m.LoginFuncionarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
