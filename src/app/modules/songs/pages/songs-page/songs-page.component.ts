import { Subscription } from 'rxjs';
import { SongsModel } from '@core/models/songs.model-interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongsService } from '@modules/songs/services/songs.service';
import { ToastrService } from 'ngx-toastr';
import { topArtists } from '@core/models/topArtists.model-interface';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit, OnDestroy {
  songsTrending: Array<SongsModel> = [];
  songsRandom: Array<SongsModel> = [];
  topArtist: Array<topArtists> = [];
  listObservers$: Array<Subscription> = [];

  constructor( private songsService: SongsService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
    this.LoadArtistTop();
    this.loadArtistsImages();
  }

  // TAMBIEN SE PUEDEN MANEJAR LOS OBSERVABLES COPMO PROMESAS Y VA A FUNCIONAR IGUAL QUE EL SUBSCRIBE
  // async loadDataAll():Promise<any> {
  //   this.songsTrending = await this.songsService.getAllSongs$().toPromise();
  //   this.songsRandom = await this.songsService.getAllRandom$().toPromise();
  // }

  LoadArtistTop():void {
    this.songsService.getArtistTop$()
    .subscribe((response: topArtists[]) => {
      this.topArtist = response;
      console.log('Top 10 de Artistas', response);
    })
  }

  loadArtistsImages():void {
    this.songsService.getArtistsImages$()
    .subscribe(response => {
      console.log(response);
      
    })
  }

  loadDataAll():void {
    this.songsService.getAllSongs$()
    .subscribe((response: SongsModel[]) => {
      this.songsTrending = response;
      // console.log('Esto viene de la API ---->', response);
    });
  }

  loadDataRandom():void {
    this.songsService.getAllRandom$()
    .subscribe((response: SongsModel[]) => {
      this.songsRandom = response;
      // console.log('Esto viene de la API ---->', response);
    });
  }

  ngOnDestroy():void {

  } 

}
