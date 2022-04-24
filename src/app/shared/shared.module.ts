import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';
import { RouterModule } from '@angular/router';
import { OrderlistPipe } from './pipes/orderlist.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderlistPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderlistPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
