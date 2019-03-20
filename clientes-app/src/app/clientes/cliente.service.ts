import { Injectable } from '@angular/core';
//import { CLIENTES } from './clientes.json';
import { ObjCliente } from './objcliente';
import { Region } from './region';
import { of,Observable,throwError } from 'rxjs';
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map,catchError,tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {formatDate, DatePipe} from '@angular/common';
//import localeEsAr from '@angular/common/locales/es-AR';
import {AuthService} from '../usuarios/auth.service';
import {URL_BACKEND} from '../config/config';

@Injectable()
export class ClienteService {

  private urlEndPoint: string = URL_BACKEND + '/api/clientes';
  //private urlEndPoint: string = 'http://localhost:7075/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  //AGREGAR EL ATRIBUTO EN EL CONTRUCTOR ES PARA INYECTARLO DE MANERA GLOBAL DE MANERA RAPIDA Y PROLIJA 
  constructor(
              private http: HttpClient,
              private router:Router,
              private authService: AuthService) { }

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

  //return of(CLIENTES) Cuando se llame a este metodo se devolvera el arreglo tipo json solicitado al Rest controller del BackEnd;
  //Existen 2 formas de obtener el response es decir la respuesta del servidor:
  getClientes(page: number): Observable<any> {
    
    //Forma 1    Se castea el get solitado al http con <Cliente[]> , para que sea un arreglo operable y no uno json
    //return this.http.get<Cliente[]>(this.urlEndPoint);

    //Forma 2    La otra forma de castearlo es con el pipe y el map generamos una funcion de flecha para convertir el response.
    
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      map((response: any) => {
          (response.content as ObjCliente[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          
          let pipedate = new DatePipe("es");
          
          //cliente.createAt = pipedate.transform(cliente.createAt,'EEEE dd, MMMM yyyy');//formatDate(cliente.createAt,'dd-MM-yyyy','en-US');
          //EEE DIA ABREVIADO, EEEE DIA COMPLETO, MM NUMERO DE MES, MMM MES ABREVIADO, MMMMM MES COMPLETO, SE APLICA IGUAL PARA EL AÑO
          // fullDate es otra constante
          return cliente;
        });
        return response;
      })
    );
      
  }

  create(cliente: ObjCliente) : Observable<ObjCliente>{
    return this.http.post(this.urlEndPoint,cliente,{headers: this.agregarAuthorizationHeader()}).pipe(    // pasamos el metodo agregarAuthorizationHeader para que la cabesera pasada tenga la autorizacion tambien
      map((response:any) => response.cliente as ObjCliente),
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

  getCliente(id) : Observable<ObjCliente>{

    return this.http.get<ObjCliente>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        Swal.fire({ title: 'Error', text: `${e.error.mensaje}`, type: 'error', confirmButtonText: 'Aceptar'});
        return throwError(e);
      })
    );
  }

  update(cliente:ObjCliente): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }


        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire({
          title: e.error.mensaje,
          text:   e.error.error,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<ObjCliente>{
    return this.http.delete<ObjCliente>(`${this.urlEndPoint}/${id}`,{headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire({
          title: e.error.mensaje,
          text:   e.error.error,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
        return throwError(e);
      })
    );
  }

  subirFoto(archivo:File,id): Observable<HttpEvent<{}>>{
    let formData = new FormData();
    formData.append("archivo",archivo);
    formData.append("id",id);

    let httpHeaders = new HttpHeaders();
    let token = this.authService.token;
    if (token!=null) {
      httpHeaders = httpHeaders.append('Authorization','Bearer ' + token);
    }

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload` , formData , {
      reportProgress: true,
      headers: httpHeaders
    });

    return this.http.request(req).pipe(
      catchError( e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  getRegiones(): Observable<Region[]> {
   
    return this.http.get<Region[]>(this.urlEndPoint+'/regiones', {headers: this.agregarAuthorizationHeader()}).pipe(
      catchError( e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

}
