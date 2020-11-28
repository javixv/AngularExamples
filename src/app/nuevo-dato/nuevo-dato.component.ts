import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-nuevo-dato',
  templateUrl: './nuevo-dato.component.html',
  styleUrls: ['./nuevo-dato.component.css']
})
export class NuevoDatoComponent implements OnInit {
  misdatos: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.misdatos = this.fb.group({
      nombre: ['',Validators.required],
      email: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  guardarDatos(){
    console.log(this.misdatos)
  }

}
