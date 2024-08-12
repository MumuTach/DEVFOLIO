import { TestBed } from '@angular/core/testing';

import { ContactService} from './contact-service.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ContactServiceService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie que toutes les requêtes HTTP ont été faites
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send contact form', () => {
    const mockResponse = { message: 'Email sent successfully' };
    const contactData = { name: 'John', email: 'john@example.com', message: 'Hello!' };

    service.sendContactForm(contactData).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/send-email');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
  
});
