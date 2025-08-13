import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoicemodel } from '../model/Invoice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getInvoice(): Observable<Invoicemodel> {
    console.log(`${this.apiUrl}/invoice`);
    return this.http.get<Invoicemodel>(`${this.apiUrl}/invoice`);
  }

  checkBackendHealt(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`);
  }
}
