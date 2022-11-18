import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lancamento } from '../models/lancamento.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioID}/ultimo';
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioID}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioID}/todos';

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
    ) { }

    buscarUltimoTipoLancado(): Observable<any> {
      return this.http.get(
        env.baseApiUrl + this.PATH +
        this.PATH_ULTIMO_LANC.replace(
          '{funcionarioID}', this.httpUtil.obterIdUsuario()),
          this.httpUtil.headers()
      );
    }

    cadastrar(lancamento: Lancamento): Observable<any> {
      return this.http.post(
        env.baseApiUrl + this.PATH,
        lancamento,
        this.httpUtil.headers()
      );
    }
}