import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-datos-sesion',
  templateUrl: './datos-sesion.component.html',
  styleUrls: ['./datos-sesion.component.css']
})
export class DatosSesionComponent {
//export class DatosSesionComponent implements OnInit {

  public misUsuarios: Usuario[] = []


  myId =2;

  miUsuario: any = 0;
  usuarioEncontrado : number = 0;

  newUser = {
    id: this.myId,
    nombre: ''
  }
// Mi código


  searchQuery: string = '';
  
  searchResults: string[] = [];

  // usuarios: Usuario[] = [
  //   { nombre: 'Usuario 1' },
  //   { nombre: 'Usuario 2' },
  //   { nombre: 'Usuario 3' },
  // ];

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

// removeUser(user: any) {
//   const index = this.selectedOption.indexOf(user);
//   if (index !== -1) {
//     this.selectedOption.slice(index, 1);
//   }
// }






 


  // constructor ( private usuariosService: UsuariosService, ) { }

  // ngOnInit(): void {
    
  //   this.misUsuarios = this.usuariosService.getUsers();
  //   console.log("mis usuarios", this.misUsuarios);

  //   // this.usuariosService.getUsuarios()
  //   //   .subscribe( usuarios => this.usuarios = usuarios );

  // }

  

  // addUser(){
  //   console.log("add user", this.newUser);
  //   this.usuariosService.addUser(this.newUser);
  //   this.myId ++;
  //   this.newUser = {
  //     id: 0,
  //     nombre: ''
  //   }
  // }



  // deleteUser(_id: number){
  //   this.usuariosService.deleteUser(_id);
  // }


  


}
