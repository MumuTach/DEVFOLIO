import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact-service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private contactService: ContactService, 
    private fb: FormBuilder) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      
      try {
        const response = await firstValueFrom(this.contactService.sendContactForm(contactData)); // firstValueFrom convertit un observable en une Promise
        console.log('Form submitted successfully:', response);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
}
