import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  listaTransferencias: any[] = [];
  url: string = `http://localhost:3000/transferencias`;

  constructor(private HttpClient: HttpClient) {

    this.listaTransferencias = [];

  }

  todas(): Observable <Transferencia[]>{

    return this.HttpClient.get<Transferencia[]>(this.url);

    //que esperamos de esta consulta? Esperamos que nos entregue todas las transferencias
    //Por eso definimos la url en la cual se encuentras las transferencias
    // Y que son las transferencias? una array con información, por eso tenemos que indicarle
    // A ese metodo get que esto <Transferencia[]>

  }

  get transferencias(){
    return this.listaTransferencias;
  }

  agregar(transferencia: Transferencia): Observable<Transferencia>{
    //this.transferencias.push(transferencia);
    return this.HttpClient.post<Transferencia>(this.url, transferencia);
  }

}
