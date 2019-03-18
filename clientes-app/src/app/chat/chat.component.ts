import { Component, OnInit } from '@angular/core';
import {Client} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Mensaje } from './models/mensaje';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  private client: Client;
  conectado: boolean = false;
  mensaje: Mensaje = new Mensaje();
  mensajes: Mensaje[] = [];
  escribiendo: string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS("http://localhost:7075/chat-websocket");
    }

    this.client.onConnect = (frame) =>{
      console.log('Conectados: '+ this.client.connected + ' : ' + frame);
      this.conectado = true;

      this.client.subscribe('/chat/mensaje',e => {
        let mensaje : Mensaje = JSON.parse(e.body) as Mensaje;   // e.body retorna como string por tanto hay que castearlo para que sea un objeto
        mensaje.fecha = new Date(mensaje.fecha);  //   new Date(mensaje.fecha);  CON AYUDA DEL OBJETO DATE DE JAVASCRIPT CONVERTIMOS 
                                                  //la fecha que viene desde el backend en milisegundos a un formato mas amigable
        if (!this.mensaje.color && mensaje.tipo == 'NUEVO_USUARIO' && this.mensaje.username==mensaje.username) {
          this.mensaje.color = mensaje.color;
        }
        
        this.mensajes.push(mensaje);
        console.log(mensaje); 
      });

      this.mensaje.tipo = 'NUEVO_USUARIO';
      this.client.publish({destination: '/app/mensaje', body: JSON.stringify(this.mensaje)});

      this.client.subscribe('/chat/escribiendo', e =>{
        this.escribiendo = e.body;
        setTimeout( () => this.escribiendo="" , 3000)
      })


    }
    this.client.onDisconnect = (frame) => {
      console.log('Desconectados: '+ this.client.connected + ' : ' + frame);
      this.conectado = false;
    }
    
  }

  conectar():void{
    this.client.activate();
  }

  desconectar():void{
    this.client.deactivate();
  }

  enviarMensaje(): void {
    this.mensaje.tipo = 'MENSAJE';
    this.client.publish({destination: '/app/mensaje', body: JSON.stringify(this.mensaje)});
    this.mensaje.texto = '';
  }

  usuarioEscribiendo():void{
    this.client.publish({destination: '/app/escribiendo', body: JSON.stringify(this.mensaje.username)});
  }


}
