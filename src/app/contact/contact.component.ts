import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData = {
  name: '',
  lastname:'',
  telefon:'',
  email:'',
  message:'',
  land:'',
  file: null
  };
 }
