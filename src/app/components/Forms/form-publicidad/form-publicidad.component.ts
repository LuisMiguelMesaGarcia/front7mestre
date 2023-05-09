import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-publicidad',
  templateUrl: './form-publicidad.component.html',
  styleUrls: ['./form-publicidad.component.css']
})
export class FormPublicidadComponent {
  
  advertisingForm: FormGroup;
  // adTypes = ['Banner', 'Pop-up', 'Video', 'Redes sociales']; // Categorías de publicidad
  // imageFile: File;
  // priceRanges = ['$10 - $50', '$50 - $100', '$100 - $200']; // Rangos de precios

  
  constructor(private fb: FormBuilder) {
    this.advertisingForm = this.fb.group({
      adType: ['', Validators.required],
      image: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priceRange: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.advertisingForm.value);
    // if (this.advertisingForm.valid) {
    //   const formData = new FormData();
    //   formData.append('adType', this.advertisingForm.get('adType').value);
    //   formData.append('image', this.imageFile);
    //   formData.append('startDate', this.advertisingForm.get('startDate').value);
    //   formData.append('endDate', this.advertisingForm.get('endDate').value);
    //   formData.append('priceRange', this.advertisingForm.get('priceRange').value);
    //   // Aquí enviarías los datos a un servidor
    //   console.log(formData);
    // }
  }

  // onFileChange(event: any) {
  //   if (event.target.files.length > 0) {
  //     // this.imageFile = event.target.files[0];
  //   }
  // }

  //Explicación:

//Creamos un formulario de Angular usando FormGroup y FormBuilder.
//Agregamos validación de campos requeridos para los campos Tipo de publicidad, Imagen, Fecha y Precio.
//Creamos una lista de categorías de publicidad y rangos de precios.
//Creamos una función onSubmit() para manejar la acción de enviar el formulario, donde obtenemos los valores del formulario y los agregamos a un objeto FormData que podemos enviar a un servidor.
//Creamos una función onFileChange() para manejar el evento de cambio de archivo de imagen y almacenamos el archivo en una variable.
//En la plantilla HTML (advertising-form.component.html), agregamos los campos de entrada y botón de envío del formulario, y agregamos la función onFileChange() al campo de entrada de imagen.

}
