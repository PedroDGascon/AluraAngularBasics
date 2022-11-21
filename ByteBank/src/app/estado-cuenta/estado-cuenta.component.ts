import { Component, Input, OnInit } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss']
})
export class EstadoCuentaComponent implements OnInit {


  //Recibiendo información en nuestro componente
  // Quitando el input porque creamos el servicio @Input() transferencias: any[] = [];

  // objeto
  //transferencia:any = {}

  transferencias: any[] = [];

  constructor(private service: TransferenciasService) {

  }

  ngOnInit(): void {

    this.service.todas().subscribe((m: Transferencia[]) =>{
      this.transferencias = m;
    });
  }

}
