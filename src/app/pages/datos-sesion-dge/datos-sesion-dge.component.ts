import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-sesion-dge',
  templateUrl: './datos-sesion-dge.component.html',
  styleUrls: ['./datos-sesion-dge.component.css']
})
export class DatosSesionDGEComponent {

  public opcion: string = 'opcion1';

  usuarios: string[] = [
    'Lucero Madrid', 'Julian Quiñones'
  ];


 public selectedOption: string = '';

 // Agregar usuario
 agregarUsuario() {
  // const nuevoUsuario = { nombre: 'Nuevo Usuario' };

  if (this.usuarios.length === 8) {
    return
  } else if (this.selectedOption) {
    this.usuarios.push(this.selectedOption);
  }
  
}

eliminarUsuario(nombreUsuario: string) {
  const indice = this.usuarios.indexOf(nombreUsuario);
  if (indice !== -1) {
    this.usuarios.splice(indice, 1);
  }
}

  opcionSeleccionadaOnChange() {

     // Aquí puedes realizar las acciones necesarias después de asignar la opción seleccionada
  console.log('Opción seleccionada:', this.opcion);
  this.opcion;
  }






}
