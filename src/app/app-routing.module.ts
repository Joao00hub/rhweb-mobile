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
  {
    path: 'inicio-adm',
    loadChildren: () => import('./inicio-adm/inicio-adm.module').then( m => m.InicioAdmPageModule)
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then( m => m.QuemSomosPageModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('./avisos/avisos.module').then( m => m.AvisosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
