import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion-agenda',
  templateUrl: './confirmacion-agenda.component.html',
  styleUrls: ['./confirmacion-agenda.component.css']
})
export class ConfirmacionAgendaComponent {

   ugi: string = 'UGI';
   uaj: string = 'UAJ';

   public opcion: string = 'opcion1';


   opcionSeleccionadaOnChange() {
 
      // Aquí puedes realizar las acciones necesarias después de asignar la opción seleccionada
   console.log('Opción seleccionada:', this.opcion);
   this.opcion;
   }

}
