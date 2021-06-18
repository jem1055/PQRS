import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Componets
import { RegistroQuejasComponent } from './pages/registro-quejas/registro-quejas.component';

const routes: Routes = [
  { path: '**', redirectTo: 'registroQuejas', pathMatch: 'full' },
  { path: 'registroQuejas', component: RegistroQuejasComponent },
  { path: '', redirectTo: 'registroQuejas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejaRoutingModule {}
