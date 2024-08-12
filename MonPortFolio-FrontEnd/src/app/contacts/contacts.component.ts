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
  confirmationMessage: boolean = false;
  formSubmitted: boolean = false;

  constructor(
    private contactService: ContactService, 
    private fb: FormBuilder) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    if (localStorage.getItem('formSubmitted') === 'true') {
      this.confirmationMessage = true;
      localStorage.removeItem('formSubmitted');
      window.scrollTo(0, document.getElementById('contacts')!.offsetTop);
    }
  }

  async onSubmit(): Promise<void> {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      
      if (this.contactForm.valid) {
        const contactData = this.contactForm.value;
        
        try {
          console.log("went into onSubmit");
          await firstValueFrom(this.contactService.sendContactForm(contactData)); // Convert Observable to Promise
          localStorage.setItem('formSubmitted', 'true'); // Set a flag in localStorage
          //window.location.reload();
        } catch (error) {
          console.error('Error submitting form:', error);
          this.confirmationMessage = false; 
        }
      } else {
        this.confirmationMessage = false; 
        console.log("form not valid")
      }
    }
  }
}
