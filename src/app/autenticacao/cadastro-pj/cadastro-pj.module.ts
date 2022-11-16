import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CadastroPjComponent } from './components/cadastro-pj.component';


@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class CadastroPjModule { }
