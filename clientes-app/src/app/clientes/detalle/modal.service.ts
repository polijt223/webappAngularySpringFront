import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;
  private _notificarUpload = new EventEmitter<any>();
  // Se agrega _ al atributo, para diferenciar el atributo de sus metodos accesor(get and set).

  constructor() { }

  abrirModal(){
    this.modal=true;
  }
  cerarModal(){
    this.modal=false;
  }

  get notificarUpload(): EventEmitter<any>{
    return this._notificarUpload;
  }

}
