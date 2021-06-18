import { ConversacionDto } from './conversacionDto';

export class QuejaDto {
  correo?: string;
  celular?: number;
  pin?: number;
  conversaciones?: ConversacionDto[];
}
