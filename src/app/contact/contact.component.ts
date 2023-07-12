import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData = {
    name: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    country: '',
  };
  constructor(private http: HttpClient) {}

  submitForm() {
    // Make an HTTP POST request to your Netlify function endpoint
    this.http
      .post('/.netlify/functions/your-function-name', this.formData)
      .subscribe(
        (response) => {
          // Handle the success response
          console.log('Form submission successful', response);
        },
        (error) => {
          // Handle the error response
          console.error('Form submission failed', error);
        }
      );
  }
}
