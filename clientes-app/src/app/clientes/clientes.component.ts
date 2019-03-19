import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from './detalle/modal.service';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  clienteId:Cliente ;
  paginador:any;
  clienteSeleccionado: Cliente ;
  urlBackEnd: string = URL_BACKEND;
  authServiceH: AuthService;
  
  constructor(private clienteService: ClienteService,
              private activatedRoute: ActivatedRoute,
              private modalService: ModalService,
              private authService: AuthService ) { 

                this.authServiceH = this.authService;

              }

  ngOnInit() {
    window.onload = function (){
      setTimeout (console.clear, 500); 
    }
    
      this.activatedRoute.paramMap.subscribe( params => {
        let page:number = +params.get('page');

        if (!page) {
          page = 0;
        }

        this.clienteService.getClientes(page).pipe(
         /* tap(response => {
            
            console.log("ClienteComponent tap 3");
            (response.content as Cliente[]).forEach(
              cliente =>{console.log(cliente.nombre);}
            );
          })  */   //Uso de tap, innesesario en este ejemplo 
        ).subscribe(response => {
          this.clientes = response.content as Cliente[];
          this.paginador = response;
        });

      });

      this.modalService.notificarUpload.subscribe(cliente => {
        this.clientes = this.clientes.map(clienteOriginal => {
          if (cliente.id == clienteOriginal.id) {
            clienteOriginal.foto = cliente.foto;
          }
          return clienteOriginal;
        });
      });

  }

  selectId(id: number): void{
    this.clienteService.getCliente(id).subscribe(
      cliente => this.clienteId = cliente
    );
  }

  delete(cliente: Cliente): void{

    const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
    title: 'Eliminar Cliente',
    text: "Estas seguro de eliminar el registros del cliente!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          reponse=> {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            Swal.fire(
            'Cliente eliminado!',
            `Cliente ${cliente.nombre} eliminado con éxito`,
            'success'
            )
          }
        )
      }
    })
    //Fin sweetalert2
  }//fin method delete

  abrirModal(cliente: Cliente){
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }

}
