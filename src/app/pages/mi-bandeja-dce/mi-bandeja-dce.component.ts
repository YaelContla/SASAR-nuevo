import { Component } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { Accion } from '../../models/accion';


@Component({
  selector: 'app-mi-bandeja-dce',
  templateUrl: './mi-bandeja-dce.component.html',
  styleUrls: ['./mi-bandeja-dce.component.css']
})
export class MiBandejaDCEComponent {
solicitudes : Solicitud[] = [];
filterPost = '';
filterField = '';

cleanSearch() {
  this.filterPost = '';
}

ngOnInit(): void{

this.solicitudes = [
  {
    folio : '********',
    unidadResponsable: "Por Definir",
    tipoSolicitud:"Por Definir",
    empresa:"Combustibles ME",
    fechaSolicitud:"16/07/2023",
    nombreRepresentante:"Oscar Juárez", 
    correoRepresentante:"oj23@gmail.com",
    estatusSemaforo:"icon-graysasar",
    estatusDesc:"En recepción",
    accionesList: [
      { "accionDesc": "Ver Solicitud", "accionUrl": "/representante" },
    ]
  },
  {
    folio : '2356634',
    unidadResponsable: "Por Definir",
    tipoSolicitud:"Por Definir",
    empresa:"Emp ME",
    fechaSolicitud:"16/07/2023",
    nombreRepresentante:"José Goméz",
    correoRepresentante:"joseg@gmail.com",
    estatusSemaforo:"icon-greensasar",
    estatusDesc:"En recepción",
    accionesList: [
      { "accionDesc": "Asignar Unidad", "accionUrl": "/asignacionUnidades" },
    ]
  },
  {
    folio : '5789643',
    unidadResponsable: "Por Definir",
    tipoSolicitud:"Por Definir",
    empresa:"PEMEX ME",
    fechaSolicitud:"16/07/2023",
    nombreRepresentante:"Alex Bonilla",
    correoRepresentante:"alexb@gmail.com",
    estatusSemaforo:"icon-greensasar",
    estatusDesc:"En recepción",
    accionesList: [
      { "accionDesc": "Asignar Unidad", "accionUrl": "/asignacionUnidades" },
    ]
  } 
    
];
}

}

