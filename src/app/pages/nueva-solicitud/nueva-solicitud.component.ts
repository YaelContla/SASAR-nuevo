import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

imports: [
  FormsModule,
  ReactiveFormsModule
]

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.css']
})
export class NuevaSolicitudComponent {
    showpermisos = false;
    showparticipantes = false;
    participantes: any[] = [];
    mostrarFormularioParticipantes: boolean = false;
    form!: FormGroup;
    userForm!: FormGroup;
    participante: any = {};
    mostrarModal = false;
    modoEdicion = false;
    constructor(private fb: FormBuilder, private router: Router) {
  
  
      this.RegistroFormulario();
    }
  
  
    get crenovalido() {
      return this.form.get('cre')?.invalid && this.form.get('cre')?.touched;
    }
    get actividadpreponderantenovalido() {
      return this.form.get('actividadpreponderante')?.invalid && this.form.get('actividadpreponderante')?.touched;
    }
    get nombrenovalido() {
      return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
    }
    get apellidoPnovalido() {
      return this.form.get('apellidoP')?.invalid && this.form.get('apellidoP')?.touched;
    }
    get apellidoMnovalido() {
      return this.form.get('apellidoM')?.invalid && this.form.get('apellidoM')?.touched;
    }
    get rfcnovalido() {
      return this.form.get('rfc')?.invalid && this.form.get('rfc')?.touched;
    }
    get permisosnovalido() {
      return this.form.get('permisos')?.invalid && this.form.get('permisos')?.touched;
    }
    get expedientenovalido() {
      return this.form.get('expediente')?.invalid && this.form.get('expediente')?.touched;
    }
    get asuntonovalido() {
      return this.form.get('asunto')?.invalid && this.form.get('asunto')?.touched;
    }
    get nombre2novalido() {
      return this.form.get('nombre2')?.invalid && this.form.get('nombre2')?.touched;
    }
    get apellidoP2novalido() {
      return this.form.get('apellidoP2')?.invalid && this.form.get('apellidoP2')?.touched;
    }
    get apellidoM2novalido() {
      return this.form.get('apellidoM2')?.invalid && this.form.get('apellidoM2')?.touched;
    }
    get rfc2novalido() {
      return this.form.get('rfc2')?.invalid && this.form.get('rfc2')?.touched;
    }
    get correonovalido() {
      return this.form.get('correo')?.invalid && this.form.get('correo')?.touched;
    }
    get correosnovalido() {
      return this.form.get('correo2')?.invalid && this.form.get('correo2')?.touched;
    }
    get telefononovalido() {
      return this.form.get('telefono')?.invalid && this.form.get('telefono')?.touched;
    }
    get celularnovalido() {
      return this.form.get('celular')?.invalid && this.form.get('celular')?.touched;
    }
    get documentonovalido() {
      return this.form.get('documento')?.invalid && this.form.get('documento')?.touched;
    }
    get deacuerdonovalido() {
      return this.form.get('deacuerdo')?.invalid && this.form.get('deacuerdo')?.touched;
    }
    get declaronovalido() {
      return this.form.get('declaro')?.invalid && this.form.get('declaro')?.touched;
    }
    get participantesFormArray() {
      return this.form.get('participantes') as FormArray;
    }
    RegistroFormulario() {
      this.form = this.fb.group({
        cre: ['', [Validators.required]],
        fecha: [{ value: this.getCurrentDate(), disabled: false }, Validators.required],
        actividadpreponderante: ['', Validators.required],
        nombre: ['', [Validators.required, Validators.minLength(4)]],
        apellidoP: ['', [Validators.required, Validators.minLength(4)]],
        apellidoM: ['', Validators.minLength(4)],
        rfc: ['', [Validators.pattern('([A-Z]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$')]],
        permisos: ['', [Validators.minLength(2)]],
        expediente: ['', [Validators.required, Validators.minLength(2)]],
        asunto: ['', [Validators.required, Validators.minLength(5)]],
  
        nombre2: ['', [Validators.required, Validators.minLength(4)]],
        apellidoP2: ['', [Validators.required, Validators.minLength(4)]],
        apellidoM2: ['', [Validators.required, Validators.minLength(4)]],
        rfc2: ['', [Validators.required, Validators.minLength(11), Validators.pattern('([A-Z]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$')]],
        correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        correo2: ['', Validators.required],
        telefono: ['', Validators.minLength(5)],
        celular: ['', [Validators.required, Validators.minLength(10)]],
        documento: ['', [Validators.required, Validators.minLength(2)]],
        deacuerdo: ['', Validators.required],
        declaro: ['', Validators.required],
        participantes: this.fb.array([]),
  
      },
        {
          Validators: this.Correosiguales('correo', 'correo2')
        }
      )
    }
    onCreChange(): void {
      const creValue = this.form.get('cre')?.value;
      this.showpermisos = creValue === 'regulado';
    }
    getCurrentDate(): string {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
    guardar() {
      console.log(this.form);
      this.CorreoNovalido();
      if (this.form.invalid) {
        return Object.values(this.form.controls).forEach(control => {
          control.markAllAsTouched();
        })
      }
      this.router.navigate(['/AcuseRecibido'])
      this.participantes = this.participantesFormArray.value;
      console.log(this.participantes);
    }  
  
    
    CorreoNovalido() {
      const correo1 = this.form.get('correo')?.value;
      const correo2 = this.form.get('correo2')?.value;
      if (correo1 !== correo2) {
        return true;
      }
      else {
        return false;
      }
    }
    // Correosiguales(Mailname:string, Mailsname:string){
    // return(formGroup:FormGroup) =>{
    //   const correocontrol = formGroup.get(Mailname);
    //   const correoscontrol = formGroup.get(Mailsname);
    //   if(correocontrol?.value === correoscontrol?.value){
    //     correoscontrol?.setErrors(null);
    //   }else{
    //     correoscontrol?.setErrors({
    //       noesigual:true
    //     });
    //   }
    // }
    // }
    Correosiguales(campo1: string, campo2: string) {
      return (formGroup: FormGroup) => {
        const control1 = formGroup.controls[campo1];
        const control2 = formGroup.controls[campo2];
  
        if (control1.value !== control2.value) {
          control2.setErrors({ noCoinciden: true });
        } else {
          control2.setErrors(null);
        }
      };
    }
    ngOnInit(): void {
      const body = document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = 'assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
  
    }
  
    abrirModal(userForm: NgForm) {
  
      this.participante = {};
      this.mostrarModal = true;
      this.modoEdicion = false;
      userForm.resetForm();
    }
  
    cerrarModal() {
      this.mostrarModal = false;
  
    }
  
    guardarParticipante(participante: any, userForm: NgForm) {
      console.log(participante);
      console.log(userForm.value.correo);
      console.log(userForm.value.correo2);
      if (userForm.valid && userForm.value.correo === userForm.value.correo2) {
        if (this.modoEdicion) {
          console.log(participante);
          console.log(this.participantes);
          console.log(participante.nombre);
          console.log(participante.id);
          console.log(participante.cargo);
          console.log(participante.compania);
          const index = this.participantes.findIndex(u => u.id === participante.id);
          console.log(index);
          if (index !== -1) {
            this.participantes[index] = participante;
          }
        } else {
          this.participante.id = new Date().getUTCMilliseconds();
          this.participantes.push(this.participante);
        }
  
        this.cerrarModal();
      } else {
        userForm.controls['correo2'].setErrors({ emailMismatch: true })
      }
    }
  
    editarParticipante(participante: any) {
      this.participante = { ...participante };
      this.mostrarModal = true;
      this.modoEdicion = true;
    }
  
    borrarParticipante(participante: any) {
      const index = this.participantes.findIndex(u => u === participante);
      if (index !== -1) {
        this.participantes.splice(index, 1);
      }
    }
  
  
  }
  