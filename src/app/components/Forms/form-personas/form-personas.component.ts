import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-personas',
  templateUrl: './form-personas.component.html',
  styleUrls: ['./form-personas.component.css']
})
export class FormPersonasComponent {
  personForm: FormGroup;
  roles = ['Administrator', 'User', 'Other'];

  constructor(private fb: FormBuilder) { }

  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.personForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.personForm.value);
  }
}
