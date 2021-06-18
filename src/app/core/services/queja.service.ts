import { Injectable } from '@angular/core';
import { MensajeDto } from '../data/schema/mensajesDto';

// Import Dtos
import { QuejaDto } from '../data/schema/quejaDto';

@Injectable({
  providedIn: 'root',
})
export class QuejaService {

  filterPost = "";

  informacionQuejaBase: QuejaDto[] = [
    {
      correo: 'correo1',
      celular: 1234567,
      pin: 4001,
      conversaciones: [
        {
          titulo: 'Queja sobre el area de cartera ',
          radicadoNumero: '20190829-027',
          fecha: new Date('02,15,2019'),
          mensajes: [
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Carlos' },
            { mensaje: 'dolor sit ame', nombre: 'Mario' },
          ],
          documento: {
            nombre: "Prueba pdf.txt",
            archivo: "data:@file/plain;base64,ODE5ODYwNDQ0NTMNCjQ1NTI1Ng==",
          }
        },

        {
          titulo: 'Informe de cartera ',
          radicadoNumero: '20190829-107',
          fecha: new Date('02,15,2019'),
          mensajes: [
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Carlos' },
            { mensaje: 'dolor sit ame', nombre: 'Jose' },
          ],
        },
        {
          titulo: 'Informe de compras ',
          radicadoNumero: '20200829-107',
          fecha: new Date('02,15,2020'),
          mensajes: [
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Maria' },
            { mensaje: 'dolor sit ame', nombre: 'Carlos' },
          ],
          documento: {
            nombre: "Prueba pdf.txt",
            archivo: "data:@file/plain;base64,ODE5ODYwNDQ0NTMNCjQ1NTI1Ng==",
          }
        },
      ],
    },
    {
      correo: 'correo2',
      celular: 4545,
      pin: 4002,
      conversaciones: [
        {
          titulo: 'Factura Provedores ',
          radicadoNumero: '20190829-008',
          fecha: new Date('02,15,2019'),
          mensajes: [
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Carlos' },
            { mensaje: 'dolor sit ame', nombre: 'Mario' },
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Carlos' },
            { mensaje: 'dolor sit ame', nombre: 'Mario' },
          ],
        },
      ],
    },
    {
      correo: 'correo3',
      celular: 324532,
      pin: 4003,
      conversaciones: [
        {
          titulo: 'Informe de cartera ',
          radicadoNumero: '20190829-017',
          fecha: new Date('02,15,2019'),
          mensajes: [
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Carlos' },
            { mensaje: 'dolor sit ame', nombre: 'Mario' },
          ],
          documento: {
            nombre: "Prueba pdf.txt",
            archivo: "data:@file/plain;base64,ODE5ODYwNDQ0NTMNCjQ1NTI1Ng==",
          }
        },
      ],
    },
    {
      correo: 'correo4',
      celular: 325324,
      pin: 4004,
      conversaciones: [
        {
          titulo: 'Informe de cartera ',
          radicadoNumero: '20190829-007',
          fecha: new Date('02,15,2019'),
          mensajes: [
            { mensaje: 'Lorem ipsum dolor sit ame', nombre: 'Carlos' },
            { mensaje: 'dolor sit ame', nombre: 'Mario' },
          ],
          documento: {
            nombre: "Prueba pdf.txt",
            archivo: "data:@file/plain;base64,ODE5ODYwNDQ0NTMNCjQ1NTI1Ng==",
          }
        },
      ],
    },
  ];

  constructor() { }

  consultarTramite(queja: QuejaDto) {
    return this.informacionQuejaBase.filter(q =>
      (q.celular == queja.celular || q.correo == queja.correo) && q.pin == queja.pin);
    /*let filtroInformacionQuejaBase: QuejaDto[];
    console.log(queja);
    if (queja.celular != null) {
      filtroInformacionQuejaBase = this.informacionQuejaBase.filter(
        (QuejaBase) =>
          QuejaBase.celular == queja.celular && QuejaBase.pin == queja.pin
      );
    }

    if (queja.correo != null) {
      filtroInformacionQuejaBase = this.informacionQuejaBase.filter(
        (QuejaBase) =>
          QuejaBase.correo == queja.correo && QuejaBase.pin == queja.pin
      );
    }

    return filtroInformacionQuejaBase;*/
  }
}
