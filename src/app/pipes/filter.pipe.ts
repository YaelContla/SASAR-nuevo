import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any, arg2: any): any {
    const resultPost = [];
    for(const solicitud of value){
      switch(arg2){
        case "folio":
          if(solicitud.folio.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPost.push(solicitud);
          }
        break;
        case "empresa":
          if(solicitud.empresa.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPost.push(solicitud);
          }
        break;
        case "representante":
          if(solicitud.nombreRepresentante.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPost.push(solicitud);
          }
        break;
        case "email":
          if(solicitud.correoRepresentante.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPost.push(solicitud);
          }
        break;
        default:
          if(solicitud.folio.toLowerCase().indexOf(arg.toLowerCase()) > -1
          ||solicitud.empresa.toLowerCase().indexOf(arg.toLowerCase()) > -1
          ||solicitud.nombreRepresentante.toLowerCase().indexOf(arg.toLowerCase()) > -1
          ||solicitud.correoRepresentante.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPost.push(solicitud);
          }
      }
      
    };
    return resultPost;
  }

}
