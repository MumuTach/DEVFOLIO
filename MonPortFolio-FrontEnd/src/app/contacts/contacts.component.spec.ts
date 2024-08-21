import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactService } from './contact-service.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsComponent],
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        ContactService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie que toutes les requêtes HTTP ont été faites
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.controls['name']).toBeDefined();
    expect(component.contactForm.controls['email']).toBeDefined();
    expect(component.contactForm.controls['message']).toBeDefined();
  });

  it('should validate form inputs', () => {
    const nameInput = component.contactForm.controls['name'];
    const emailInput = component.contactForm.controls['email'];
    const messageInput = component.contactForm.controls['message'];

    // Initial state
    expect(nameInput.valid).toBeFalsy();
    expect(emailInput.valid).toBeFalsy();
    expect(messageInput.valid).toBeFalsy();

    // Set valid values
    nameInput.setValue('John Doe');
    emailInput.setValue('john@example.com');
    messageInput.setValue('Hello, this is a test message.');

    expect(nameInput.valid).toBeTruthy();
    expect(emailInput.valid).toBeTruthy();
    expect(messageInput.valid).toBeTruthy();
  });

  it('should display validation errors when form inputs are invalid', () => {
    const nameInput = component.contactForm.controls['name'];
    nameInput.markAsTouched();

    fixture.detectChanges();

    const nameError = fixture.nativeElement.querySelector('mat-error');
    expect(nameError).toBeTruthy();
    expect(nameError.textContent).toContain('Name is required');
  });

  it('should disable the submit button if the form is invalid', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTrue();

    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john@example.com');
    component.contactForm.controls['message'].setValue('Hello!');

    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalse();
  });
/*
  it('should send an email and refresh the page', async () => {
    const mockResponse = { message: 'Email sent successfully' };

    component.contactForm.setValue({
      name: 'John',
      email: 'john@example.com',
      message: 'Hello!'
    });

    //const reloadSpy = spyOn(window.location, 'reload');

    await component.onSubmit();

    const req = httpMock.expectOne('http://localhost:3000/send-email');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      name: 'John',
      email: 'john@example.com',
      message: 'Hello!'
    });

    req.flush(mockResponse);

    //expect(reloadSpy).toHaveBeenCalled();
  });

  it('should show confirmation message on reload if form submitted', () => {
    localStorage.setItem('formSubmitted', 'true');

    component.ngOnInit();

    expect(component.confirmationMessage).toBeTrue();
    expect(localStorage.getItem('formSubmitted')).toBeNull();
  });

  it('should show an error message if email sending fails', async () => {
    const mockError = { error: 'Error sending email' };

    component.contactForm.setValue({
      name: 'John',
      email: 'john@example.com',
      message: 'Hello!'
    });

    await component.onSubmit();

    const req = httpMock.expectOne('http://localhost:3000/send-email');
    req.flush(mockError, { status: 500, statusText: 'Internal Server Error' });

    expect(component.confirmationMessage).toBeFalse();
  });*/

});


