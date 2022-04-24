import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '@modules/favorites/services/favorites.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  // PLAYLIST BODY
  listResults$: Observable<any> = of([])

  constructor( private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    this.listResults$ = this.favoritesService.searchTracks$();
  }
}
