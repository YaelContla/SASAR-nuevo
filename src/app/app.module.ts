import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DatosSesionComponent } from './pages/datos-sesion/datos-sesion.component';
import { ConfirmacionAgendaComponent } from './pages/confirmacion-agenda/confirmacion-agenda.component';
import { PagesComponent } from './pages/pages.component';
import { CorreoComponent } from './pages/correo/correo.component';
import { CorreoSesionInformativaComponent } from './pages/correo-sesion-informativa/correo-sesion-informativa.component';
import { DatosSesionDGEComponent } from './pages/datos-sesion-dge/datos-sesion-dge.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ConfirmacionReunionComponent } from './pages/confirmacion-reunion/confirmacion-reunion.component';
import { MiBandejaDCEComponent } from './pages/mi-bandeja-dce/mi-bandeja-dce.component';
import { AsgnacionUnidadesComponent } from './pages/asgnacion-unidades/asgnacion-unidades.component';
import { NuevaSolicitudComponent } from './pages/nueva-solicitud/nueva-solicitud.component';
import { SolicitudRepresentanteComponent } from './pages/solicitud-representante/solicitud-representante.component';
import { CorreoCumpleComponent } from './pages/correo-cumple/correo-cumple.component';
import { CorreoNoCumpleComponent } from './pages/correo-no-cumple/correo-no-cumple.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './pages/header/header.component';

// import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatosSesionComponent,
    ConfirmacionAgendaComponent,
    PagesComponent,
    CorreoComponent,
    CorreoSesionInformativaComponent,
    DatosSesionDGEComponent,
    Error404PageComponent,
    ConfirmacionReunionComponent,
    MiBandejaDCEComponent,
    AsgnacionUnidadesComponent,
    NuevaSolicitudComponent,
    SolicitudRepresentanteComponent,
    CorreoCumpleComponent,
    CorreoNoCumpleComponent,
    SidebarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
