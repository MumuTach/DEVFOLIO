import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = "http://localhost:3000/send-email";

  constructor(private http: HttpClient) { }

  sendContactForm(contact: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Sending contact form data:', contact); 
    return this.http.post<any>(this.apiUrl, contact, { headers: headers });
  }
}
