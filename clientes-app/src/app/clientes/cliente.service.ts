import { Injectable } from '@angular/core';
//import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Region } from './region';
import { of,Observable,throwError } from 'rxjs';
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map,catchError,tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {formatDate, DatePipe} from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

@Injectable()
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:7075/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  //AGREGAR EL ATRIBUTO EN EL CONTRUCTOR ES PARA INYECTARLO DE MANERA GLOBAL DE MANERA RAPIDA Y PROLIJA 
  constructor(private http: HttpClient, private router:Router ) { }

  //return of(CLIENTES) Cuando se llame a este metodo se devolvera el arreglo tipo json solicitado al Rest controller del BackEnd;
  //Existen 2 formas de obtener el response es decir la respuesta del servidor:
  getClientes(page: number): Observable<any> {
    
    //Forma 1    Se castea el get solitado al http con <Cliente[]> , para que sea un arreglo operable y no uno json
    //return this.http.get<Cliente[]>(this.urlEndPoint);

    //Forma 2    La otra forma de castearlo es con el pipe y el map generamos una funcion de flecha para convertir el response.
    
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        console.log("ClienteService tap 1");
        (response.content as Cliente[]).forEach(
          cliente =>{console.log(cliente.nombre);}
        );
      }),
      map((response: any) => {
          (response.content as Cliente[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          
          let pipedate = new DatePipe("es");
          
          //cliente.createAt = pipedate.transform(cliente.createAt,'EEEE dd, MMMM yyyy');//formatDate(cliente.createAt,'dd-MM-yyyy','en-US');
          //EEE DIA ABREVIADO, EEEE DIA COMPLETO, MM NUMERO DE MES, MMM MES ABREVIADO, MMMMM MES COMPLETO, SE APLICA IGUAL PARA EL AÑO
          // fullDate es otra constante
          return cliente;
        });
        return response;
      }),
      tap(response => {
        console.log("ClienteService tap 2");
        (response.content as Cliente[]).forEach(
          cliente =>{console.log(cliente.nombre);}

        );
      })
    );
      
  }

  create(cliente: Cliente) : Observable<Cliente>{
    return this.http.post(this.urlEndPoint,cliente,{headers: this.httpHeaders}).pipe(
      map((response:any) => response.cliente as Cliente),
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire({ title: e.error.mensaje, text: e.error.error, type: 'error', confirmButtonText: 'Aceptar'});
        return throwError(e);
      })
    );
  }

  getCliente(id) : Observable<Cliente>{

    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        Swal.fire({
          title: 'Error',
          text: `${e.error.mensaje}`,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
        return throwError(e);
      })
    );
  }

  update(cliente:Cliente): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.httpHeaders}).pipe(
      catchError(e => {

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

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders}).pipe(
      catchError(e => {
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

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload` , formData , {
      reportProgress: true
    });

    return this.http.request(req);
  }

  getRegiones(): Observable<Region[]> {
   
    return this.http.get<Region[]>(this.urlEndPoint+'/regiones');
  }

}
