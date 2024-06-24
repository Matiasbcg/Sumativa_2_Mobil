import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; 

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'docinfo/:id',
    loadChildren: () => import('./pages/docinfo/docinfo.module').then( m => m.DocinfoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'detalle-hijo',
    loadChildren: () => import('./pages/detalle-hijo/detalle-hijo.module').then( m => m.DetalleHijoPageModule),canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

