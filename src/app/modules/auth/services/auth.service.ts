import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor( private http: HttpClient, private cookie: CookieService ) { }

  // METODO PARA VALIDAR LAS CREDENCIALES DEL LOGIN
  sendCredentials(email: string, password: string): Observable<any> {
    const body = { // ALMACENAMOS LO QUE EL BODY DE LA API REQUIERE
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body);
    // IMPLEMENTANDO TOKEN DESDE EL SERVICIO POR SI LO DESEAMOS
    // .pipe(tap((response: any) => {
    //     const { tokenSession, data } = response;
    //     this.cookie.set('token_Service', tokenSession, 4, '/');
    // }))
  }
}
