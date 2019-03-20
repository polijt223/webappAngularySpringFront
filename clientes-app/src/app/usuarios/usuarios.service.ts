import { Injectable } from '@angular/core';
import { of,Observable,throwError } from 'rxjs';
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map,catchError,tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { URL_BACKEND } from '../config/config';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private urlEndPoint: string = URL_BACKEND+'/user/usuarios';
  //private urlEndPoint: string = 'http://localhost:7075/user/usuarios';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient,
              private router:Router,
              private authService: AuthService
  ) { }

  create(usuario: Usuario) : Observable<Usuario>{
    return this.http.post(this.urlEndPoint,usuario,{headers: this.agregarAuthorizationHeader()}).pipe(    // pasamos el metodo agregarAuthorizationHeader para que la cabesera pasada tenga la autorizacion tambien
      map((response:any) => response.usuario as Usuario),
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire({ title: e.error.mensaje, text: e.error.error, type: 'error', confirmButtonText: 'Aceptar'});
        return throwError(e);
      })
    );
  }

  private isNoAutorizado(e):boolean{
    if (e.status==401) {  //Error 401 quiere decir que no pueder acceder al recurso no tienes credenciales no existe no disponible

      if (this.authService.isAuthenticated()) {   //Preguntamos si el token existe, si el token existe devolvera true, Entonce el servido me dice que no puedo acceder y el front me da el okey  del token
        this.authService.logout();    //Esto se produce porque la session del backend expiro y no se cerro la sesion del frontend , para solucionarlo cerramos la session para que se vuelva a loguear
      }
      this.router.navigate(['/login']);   // mandamos al usuario al log por no estar logueado
      return true;
    }
    if (e.status==403) {
      Swal.fire({ title: 'Acceso Denegado', text: `Hola ${this.authService.usuario.username} no tienes acceso a este recurso`, type: 'warning', confirmButtonText: 'Aceptar'});
      this.router.navigate(['/clientes']);
      return true;
    }
  }

  private agregarAuthorizationHeader(){
    let token = this.authService.token;   //token es un metodo get 
    if (token != null) {            //comprueba que haya un token en el sessionStorege en caso de que si haya un token , agregamos la autorización 
      return this.httpHeaders.append('Authorization','Bearer ' + token);
    }
    return this.httpHeaders;   // sino lo retornamos como estaba , sin autorizacion por lo que tendra que loguearse

  }


}
