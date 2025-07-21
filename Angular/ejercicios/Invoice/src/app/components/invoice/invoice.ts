import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../service/invoice.services';
import { Invoicemodel } from '../../model/Invoice';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.html',
})
export class Invoice implements OnInit {
  invoice!: Invoicemodel;
  constructor(private service: InvoiceService) {}
  ngOnInit(): void {
    this.invoice = this.service.getIvoice();
  }
}
