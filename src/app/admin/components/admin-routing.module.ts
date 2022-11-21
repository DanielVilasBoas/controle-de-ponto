import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AtualizacaoComponent } from './atualizacao/atualizacao.component';
import { NgModule } from '@angular/core';
import { AdminGuard } from './services/admin-guard-services';

export const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AdminGuard ],
    children: [
      {
        path: '',
        component: ListagemComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'atualizacao/:lancamentoId',
        component: AtualizacaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {

}

