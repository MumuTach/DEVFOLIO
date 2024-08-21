import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(contactData: { name: string; email: string; message: string }): Promise<any> {
    console.log("in service");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return firstValueFrom(this.http.post(this.apiUrl, contactData, { headers}));
  }
}
