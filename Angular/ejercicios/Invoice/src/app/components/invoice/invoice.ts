import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../service/invoice.services';
import { Invoicemodel } from '../../model/Invoice';
import { CompanyView } from "../company-view/company-view";
import { CustomerView } from "../customer-view/customer-view";
import { InvoiceDetailView } from "../invoice-detail-view/invoice-detail-view";

@Component({
  selector: 'app-invoice',
  imports: [CompanyView, CustomerView, InvoiceDetailView],
  templateUrl: './invoice.html',
})
export class Invoice implements OnInit {
  invoice!: Invoicemodel;
  constructor(private service: InvoiceService) {}
  ngOnInit(): void {
    this.invoice = this.service.getIvoice();
  }
}
