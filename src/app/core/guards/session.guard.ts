import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private cookieservice: CookieService, private router: Router ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.chekCookieSession();
  }
  
  // COMPROBAMOS LA COOKIE DE SESION 
  chekCookieSession():boolean {
    try {
      const token: boolean = this.cookieservice.check('token'); // VALIDAMOS SI EL SERVICIO TIENE LA FUNCION CHEK Y YA FUE COMPROBADO
      if (!token) {
        this.router.navigate(['/','auth'])
      }
      return token
    } catch (e) {
        console.log('Algo salio mal!', e);
        return false
    }
  }

}
