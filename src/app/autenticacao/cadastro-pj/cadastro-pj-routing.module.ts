import { Routes, RouterModule } from '@angular/router';
import { CadastroPjComponent } from './components/cadastro-pj.component';
import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { compileNgModule } from '@angular/compiler';
import { NgModule } from '@angular/core';


export const CadastroPjRoutes: Routes = [
  {
    path: 'cadastro-pj',
    component: CadastroPjComponent,
    children: [
      {
        path: '',
        component: CadastrarPjComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CadastroPjRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPjRoutingModule {}
