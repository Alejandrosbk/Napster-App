import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  searchTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw:any) => dataRaw.data)
    )
  }
}