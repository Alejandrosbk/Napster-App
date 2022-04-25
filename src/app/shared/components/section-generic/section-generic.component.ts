import { Component, Input, OnInit } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';
import { topArtists } from '@core/models/topArtists.model-interface';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  // Definimos las condiciones y la estructura de los datos que se cargaran en el componente
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<SongsModel> = [];
  @Input() topArtists: Array<topArtists> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
