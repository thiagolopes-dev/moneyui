import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/seguranca/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pessoas',
    loadChildren: () =>
      import('./pages/pessoas/pessoas.module').then(
        (m) => m.PessoasModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
