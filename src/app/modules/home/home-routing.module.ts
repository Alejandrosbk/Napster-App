import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'songs',
    loadChildren: () => import('@modules/songs/songs.module').then(m => m.SongsModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/songs'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
