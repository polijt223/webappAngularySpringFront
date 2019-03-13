import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario : Usuario ;
  private _token: string;

  constructor(private http: HttpClient) { }


  hasRole(role:string): boolean{

    if (this.usuario.roles.includes(role)) {     //El metodo includes() es propio del ECMScript , corresponde a todos los arreglo,
        return true;                            // permite preguntar si exite dentro del arreglo un valor x y devuelve false o true
    }
    return false;
  }

  logout():void {
    this._token = null;
    this._usuario = null;
    //sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

  public get usuario(): Usuario{
    if (this._usuario != null) {
      return this._usuario;
    }else
    if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string{
    if (this._token != null) {
      return this._token;
      
    }else
    if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      
      return this._token;
    }
    return null;
  }

  guardarUsuario(accessToken: string): void {
    
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.nombre = payload.nombre;
    this._usuario.roles = payload.authorities;
    this._usuario.username = payload.user_name;

    sessionStorage.setItem('usuario',JSON.stringify(this._usuario)); //El local storage solo permite guardar string , con la clase JSON.stringify 
    // Podemos convertir el Objeto en JSON String y poder guardarlo en el localStorage

  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token',accessToken);
  }

  obtenerDatosToken(accessToken: string): any{
    if (accessToken!=null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }


  login(usuario:Usuario): Observable<any> {
    const urlEndpoint = 'http://localhost:7075/oauth/token';          //constantes son aquellas a las que se les asigna un valor que 
    const credenciales = btoa('angularapp' + ':' + 'root');           //ya no se modifica el valor en el trascurso del programa.
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + credenciales });

    let params = new URLSearchParams();   //No se debe importar la clase
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);

    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }

  isAuthenticated(): boolean{
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.username.length>0) {   // && payload.user_name pregunta si existe
      return true;
    }
    return false ;
  }

}
