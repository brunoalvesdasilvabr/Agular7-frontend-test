import { State } from './state.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  constructor(private _http: HttpClient) { }

  getStates(){
    console.log(this.apiUrl)
    return this._http.get<State[]>(this.apiUrl)
  }
}
