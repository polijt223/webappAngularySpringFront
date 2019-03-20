import { Component, OnInit, Input } from '@angular/core';
import {ObjCliente} from '../objcliente';
import {ClienteService} from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import {ModalService} from './modal.service';
import { AuthService } from 'src/app/usuarios/auth.service';
import {URL_BACKEND} from '../../config/config';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() cliente: ObjCliente;
  titulo: String = "Detalle del Cliente";
  fotoSeleccionada:File;
  progreso: number = 0;
  modalServiceH: ModalService;
  authServiceH:AuthService;
  urlBackEnd: string = URL_BACKEND;

  constructor(private clienteService:ClienteService, 
              //private activatedRoute: ActivatedRoute
              private modalService: ModalService,
              private authService: AuthService )
               { 
                this.authServiceH = this.authService;
                this.modalServiceH = this.modalService;

              }

  ngOnInit() {
    /*
    this.activatedRoute.paramMap.subscribe(
      params => {
        let id:number = +params.get('id');//El + se agrega para casterar params a number.
        if (id) {
          this.clienteService.getCliente(id).subscribe(
            cliente => {this.cliente = cliente;}
          );
        }
      }
    ); 
    */
  }

    seleccionarFoto(event){
      this.fotoSeleccionada = event.target.files[0];
      this.progreso = 0;
      console.log(this.fotoSeleccionada);
      console.log(this.cliente.id);
      console.log(this.cliente);
      if (this.fotoSeleccionada.type.indexOf('image')<0) {
        Swal.fire({title: 'Error Al Seleccionar Imagen:',text: "El archivo debe ser del tipo imagen",type: 'error',confirmButtonText: 'Aceptar'});
      }
    }

    subirFoto(){
      if (!this.fotoSeleccionada) {
        Swal.fire({title: 'Error Upload:',text: "Debe seleccionar una foto",type: 'error',confirmButtonText: 'Aceptar'});
      }else{
      this.clienteService.subirFoto(this.fotoSeleccionada,this.cliente.id).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((event.loaded/event.total)*100);
          }else if(event.type === HttpEventType.Response){
            let response : any = event.body;
            this.cliente = response.cliente as ObjCliente;
            this.modalService.notificarUpload.emit(this.cliente);
            Swal.fire({title: 'La Foto se ha subido completamente!',text: response.mensaje , type: 'success',confirmButtonText: 'Aceptar'});
          }
          //this.cliente = cliente;
          //Swal.fire({title: 'Cliente Actualizado',text: "La imagen del cliente se subio correctamente",type: 'success',confirmButtonText: 'Aceptar'});
        });
      }
    }

    cerrarModal(){
      this.modalService.cerarModal();
      this.fotoSeleccionada = null;
      this.progreso = 0;
    }

}
