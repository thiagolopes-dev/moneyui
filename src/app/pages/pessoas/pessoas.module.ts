import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNGModule } from 'src/app/primeng.module';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoasRoutingModule } from './pessoas.routing';



@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoasListaComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
