import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData: any = {};

  submitForm(form: NgForm) {
    if (form.valid) {
      // Perform any desired action with the form data
      console.log(this.formData);
      // Clear the form
      form.reset();
    }
  }
}
