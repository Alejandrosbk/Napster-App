import { Component, Input, OnInit } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent implements OnInit {
  // USAMOS LA MISMA INTERFAZ Y AGREGAMOS EL MODELO
  @Input() tracks: Array<SongsModel> = [];

  // OPCIONES PARA EL ORDEN 
  optionSort:{property:string | null, order:string} = {property: null, order: 'asc'}

  constructor() { }

  ngOnInit(): void {

  }

  changeSort(property: string): void {
    const { order } = this.optionSort; // USAMOS DESTRUCTURIN PARA SACAR EL VALOR DE DATA
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    // console.log(this.optionSort); TODO: log de orden desc o asc
  }

}
