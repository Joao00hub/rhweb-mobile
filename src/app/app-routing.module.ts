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
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule)
  },
  {
    path: 'novocadastro',
    loadChildren: () => import('./novocadastro/novocadastro.module').then( m => m.NovocadastroPageModule)
  },
  {
    path: 'editarcadastro',
    loadChildren: () => import('./editarcadastro/editarcadastro.module').then( m => m.EditarcadastroPageModule)
  },  {
    path: 'funcionarios-desligados',
    loadChildren: () => import('./funcionarios-desligados/funcionarios-desligados.module').then( m => m.FuncionariosDesligadosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
