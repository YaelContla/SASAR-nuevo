import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion-reunion',
  templateUrl: './confirmacion-reunion.component.html',
  styleUrls: ['./confirmacion-reunion.component.css']
})
export class ConfirmacionReunionComponent {

  public date: string = "12/06/2023";
  public horario: string = "12:30";
  public tema: string = "Texto...";
  public UAS: string = "Texto..."

}
