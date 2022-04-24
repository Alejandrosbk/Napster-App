import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  // DECLARAMOS UNA PROPIEDAD DE SOLO LECTURA CON LA VARIABLE API
  private readonly URL = environment.api;
  private readonly URI = environment.apiNap;
  private readonly apiKey = environment.apiKey;

  constructor( private http: HttpClient, private toastr: ToastrService ) {}

  // FUNCION PRIVADA PARA APLICAR FILTRO EN ESPECIFICO POR ID
  private skipById(listSongs:SongsModel[], id:number):Promise<SongsModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listSongs.filter(a => a._id !== id)
      resolve(listTmp);
    });
  }

  // METODO PARA CONECTARSE A LA API Y TRAER LAS CANCIONES 
  getAllSongs$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {  // MAPEAMOS LA API PARA EXTRAER UNICAMENTE EL ARRAY QUE QUEREMOS
        return data;
      }),
      catchError((err) => {
        setTimeout(() => {
          this.toastr.error(err.status, err.name);
        }, 1000);
        return of([])
      })
    );
  }

  getArtistTop$():Observable<any>{
    return this.http.get(`${this.URI}/artists/top?apiKey=${this.apiKey}`)
    .pipe(
      catchError((err) => {
        setTimeout(() => {
          this.toastr.error('Algo salio mal', 'Revisa la API Napster!');
        }, 1000);
        return of([])
      })
    )
  }

  getAllRandom$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {  // MAPEAMOS LA API PARA EXTRAER UNICAMENTE EL ARRAY QUE QUEREMOS
        return data;
      }),
      catchError((err) => {
        setTimeout(() => {
          this.toastr.error('Algo salio mal', 'Revisa la conexión!');
        }, 1000);
        return of([])
      })
    );
    // DE ESTA MANERA APLICAMOS EL FILTRO DE EXCEPCION POR ID
    // .pipe(
    //   mergeMap(({ data }: any) => this.skipById(data,1)),
    // );
  }
}
