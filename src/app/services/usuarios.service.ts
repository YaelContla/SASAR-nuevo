import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Usuario } from '../interfaces/usuarios.interface';
import { environments } from 'src/environments/environments';


const usuariosList = [

    {
        // id: 1,
        nombre: "Jorge Daniel Ruiz Cordero"
    },
]


@Injectable({providedIn: 'root'})
export class UsuariosService {


    constructor() { }

    // private baseUrl: string = environments.baseURL;

    // constructor(private http: HttpClient) { }
    
    // getUsuarios():Observable<Usuario[]> {
    //     return this.http.get<Usuario[]>( `${this.baseUrl}/usuarios`);
    // }


    // addUsuario( usuario: Usuario ): Observable<Usuario> {

    //     return this.http.post<Usuario>( `${this.baseUrl}/usuarios`, usuario);

    // }

    // updateUsuario( usuario: Usuario ): Observable<Usuario> {
    //     if(!usuario.id) throw Error('El id es requerido ')
    //     return this.http.patch<Usuario>(`${this.baseUrl}/usuarios/${ usuario.id }`, usuario);
    // }

    // deleteUsuarioById( id: number ):  Observable<boolean>{
        
    //     return this.http.delete(`${this.baseUrl}/usuarios/${ id }`)
    //         .pipe(
    //             catchError ( err => of(false) ),
    //             map( resp => true )
    //         );
    // }

    getUsers(){
        return usuariosList;
    }

    // getOneUser(_id: number){
    //     return usuariosList.find( usuario =>usuario.id === _id ); 
    //     // return usuariosList.find( user => user.id === _id )
    //   }
    
      addUser( usuario: Usuario ){
        usuariosList.push(usuario);
      }
    
      // editUser( newUserEdit:Usuario ) {
      //   const index = usuariosList.findIndex( usuario => usuario.id === newUserEdit.id );
      //   usuariosList[index] = newUserEdit;
      // }
    
      deleteUser(_id:number){
        usuariosList.splice(_id, 1);
      }






}