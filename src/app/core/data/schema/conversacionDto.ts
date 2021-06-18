import { By } from '@angular/platform-browser';
import { MensajeDto } from './mensajesDto';

export class ConversacionDto {
  id?: number;
  radicadoNumero?: string;
  fecha?: Date;
  titulo?: string;
  mensajes?: MensajeDto[];
  documento?: By;
}
