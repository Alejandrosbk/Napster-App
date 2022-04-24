import { Subscription } from 'rxjs';
import { SongsModel } from '@core/models/songs.model-interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongsService } from '@modules/songs/services/songs.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit, OnDestroy {
  songsTrending: Array<SongsModel> = [];
  songsRandom: Array<SongsModel> = [];
  topArtist: any;
  listObservers$: Array<Subscription> = [];

  constructor( private songsService: SongsService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
    this.LoadArtistTop();
  }

  // TAMBIEN SE PUEDEN MANEJAR LOS OBSERVABLES COPMO PROMESAS Y VA A FUNCIONAR IGUAL QUE EL SUBSCRIBE
  // async loadDataAll():Promise<any> {
  //   this.songsTrending = await this.songsService.getAllSongs$().toPromise();
  //   this.songsRandom = await this.songsService.getAllRandom$().toPromise();
  // }

  LoadArtistTop():void {
    this.songsService.getArtistTop$()
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
