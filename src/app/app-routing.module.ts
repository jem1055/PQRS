import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'queja', pathMatch: 'full' },
  {
    path: 'queja',
    loadChildren: () =>
      import('./modules/queja/queja.module').then(
        (module) => module.QuejaModule
      ),
  },
  { path: '**', redirectTo: 'queja', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
