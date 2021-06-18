import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';



// Import Dtos
import { QuejaDto } from 'src/app/core/data/schema/quejaDto';
import { ConversacionDto } from 'src/app/core/data/schema/conversacionDto';



// Import Services
import { QuejaService } from '../../../../core/services/queja.service';
import { MensajeDto } from 'src/app/core/data/schema/mensajesDto';

@Component({
  selector: 'app-registro-quejas',
  templateUrl: './registro-quejas.component.html',
  styleUrls: ['./registro-quejas.component.css'],
})
export class RegistroQuejasComponent implements OnInit {
  form: FormGroup;
  formBusqueda: FormGroup;

  queja: QuejaDto;
  mensajesArray: MensajeDto[];
  constructor(
    private formBuilder: FormBuilder,
    private quejaService: QuejaService
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario(): void {
    this.form = this.formBuilder.group({
      correo: [
        '',
        [Validators.minLength(4), Validators.maxLength(60), Validators.email],
      ],
      celular: ['', [Validators.minLength(4), Validators.maxLength(60)]],
      pin: ['', [Validators.required]],
    });

    this.formBusqueda = this.formBuilder.group({
      busqueda: ['', ,],
    });
  }
  filterpost = '';

  get correo(): AbstractControl {
    return this.form.get('correo');
  }

  get celular(): AbstractControl {
    return this.form.get('celular');
  }

  get pin(): AbstractControl {
    return this.form.get('pin');
  }

  get radicadoNumero(): AbstractControl {
    return this.form.get('radicadoNumero');
  }

  get fecha(): AbstractControl {
    return this.form.get('fecha');
  }

  get mensajes(): AbstractControl {
    return this.form.get('mensajes');
  }

  consultar(): void {
    this.mensajesArray = null;
    let queja: QuejaDto = {
      correo: this.correo.value != '' ? this.correo.value : null,
      celular: this.celular.value != '' ? this.celular.value : null,
      pin: this.pin.value,
    };

    let quejas = this.quejaService.consultarTramite(queja);

    if (quejas != null && quejas.length > 0) {
      this.queja = quejas[0];
    }

    /*console.log(quejas);
    this.queja = quejas[0];

    this.tramites = this.queja.conversaciones;

    console.log(this.queja);
    console.log(this.tramites);*/
  }



  chats(posicion: number): void {

    this.mensajesArray = this.queja.conversaciones[posicion].mensajes;
    /*
    let posicion: QuejaDto = {
      correo: this.correo.value != '' ? this.correo.value : null,
     };

    let quejas = this.quejaService.consultarTramite(queja);
    console.log(quejas);
    this.queja = quejas[0];

    this.tramites = this.queja.conversaciones;

    console.log(this.queja);
    console.log(this.tramites);*/
  }

  descargarArchivo() {
    const linkSource = `data:@file/plain;base64,ODE5ODYwNDQ0NTMNCjQ1NTI1Ng==`;
    const downloadLink = document.createElement("a");
    const fileName = "prueba.txt";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }



}
