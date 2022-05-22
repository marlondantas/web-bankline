import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://luaazul-api-bankline.herokuapp.com/bankLine';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/Movimentacoes`);
  }

  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/Movimentacoes`,movimentacao);
  }
}
