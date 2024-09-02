import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(contactData: { name: string; email: string; message: string }): Observable<any> {
    console.log("Sending message:", contactData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(this.http.post(this.apiUrl, contactData, { headers}));
    return this.http.post(this.apiUrl, contactData, { headers});
  }
}
