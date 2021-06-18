import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuejaRoutingModule } from './queja-routing.module';
import { QuejaComponent } from './queja.component';
import { RegistroQuejasComponent } from './pages/registro-quejas/registro-quejas.component';
import { ConversacionComponent } from './components/conversacion/conversacion.component';

@NgModule({
  declarations: [QuejaComponent, RegistroQuejasComponent, ConversacionComponent],
  imports: [CommonModule, QuejaRoutingModule, ReactiveFormsModule],
})
export class QuejaModule {}
