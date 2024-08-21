import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact-service.service';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  onSubmit(): void {
    console.log("in the onSubmit");
    /*
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value)
        .then(() => {
          localStorage.setItem('formSubmitted', 'true');
          window.location.reload(); 
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    }*/
        if (this.contactForm.valid) {
          const testData = {
            name: 'Test Name',
            email: 'test@example.com',
            message: 'This is a test message'
          };
          this.contactService.sendMessage(testData)
            .then(() => {
              console.log('Message sent successfully');
            })
            .catch((error) => {
              console.error('Error sending message:', error);
            });
        } else {
          console.log('Form is invalid');
        }
  }
}
