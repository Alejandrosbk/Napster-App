import { SongsModel } from '@core/models/songs.model-interface';
import { Component, Input, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ArtistModel } from '@core/models/artist.model-interface';
import { topArtists } from '@core/models/topArtists.model-interface';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  // Definimos las condiciones y la estructura de los datos que se cargaran en el componente
  @Input() mode: 'small' | 'big' = 'big';
  @Input() track: SongsModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  @Input() artist: topArtists = { name: '' };
  // @Input() artist: ArtistModel = { name: '', nickname: '', nationality: '' };

  constructor( private multimediaService: MultimediaService ) { }

  ngOnInit(): void {
  }

  // EVENTO PARA ENVIAR EL PLAY 
  sendPlay(track:SongsModel): void {
    this.multimediaService.trackInfo$.next(track);
  }
}
