import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoicemodel } from '../model/Invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoicemodel = invoiceData;
  constructor() {}

  getIvoice(): Invoicemodel {
    return this.invoice;
  }
}
