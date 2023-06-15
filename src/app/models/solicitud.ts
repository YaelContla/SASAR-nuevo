import { Accion } from "./accion";

export class Solicitud{
    folio : string = "";
    unidadResponsable : string = "";
    tipoSolicitud : string = "";
    empresa : string = "";
    fechaSolicitud : string = "";
    nombreRepresentante : string = "";
    correoRepresentante : string = "";
    estatusSemaforo : string = "";
    estatusDesc : string = "";
    accionesList: Accion[] = [];
}