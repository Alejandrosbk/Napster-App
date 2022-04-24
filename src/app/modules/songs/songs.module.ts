import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';
import { SongsPageComponent } from './pages/songs-page/songs-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SongsPageComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class SongsModule { }
