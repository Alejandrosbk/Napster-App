import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  // PLAYLIST BODY
  listResults$: Observable<any> = of([])

  constructor( private searchService: SearchService ) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //TODO: SE AGREGA EL TERMINO Y HACE LA PETICION CUANDO SEAN MAS DE TRES CARACTERES
    // console.log('evento en el padre', event);
    this.listResults$ = this.searchService.searchTracks$(event)
  }

}
