import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  constructor(private http: HttpClient) { }

  consultaPosicaoOnibus(linha: string) {
    return this.http.get('https://www.sistemas.dftrans.df.gov.br/gps/linha/' + linha + '/geo/recent');
  }

  consultarInformacaoOnibus(linha: string) {
    return this.http.get('https://www.sistemas.dftrans.df.gov.br/linha/numero/' + linha);
  }
}
