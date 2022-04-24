import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate:[ SessionGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
