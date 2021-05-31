import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'app/productService/product-service.service';
import { ProviderService } from 'app/service/provider.service';
import { CustomerServicesService } from 'app/services/customer-services.service';
import { InvoiceServiceService } from 'app/services/invoice-service.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbreCustomers;
  nbreInvoices;
  nbreProducts;
  nbreProviders;

  constructor(private customerServicesService : CustomerServicesService, private invoiceService :InvoiceServiceService ,private productService :ProductServiceService, private providerService :ProviderService) { }
  ngOnInit(): void {
    this.totalCustomer();
    this.totalInvoice();
    this.totalproducts();
    this.totalproviders();
  }

  totalCustomer(){

    this.customerServicesService.getTotalCustomers().subscribe(data =>{
      console.log("iyed")
      console.log(data);
      this.nbreCustomers=data;
      console.log("dondon")
      console.log(this.nbreCustomers);


  }
    )

}

totalInvoice(){

  this.invoiceService.getTotalInvoices().subscribe(data =>{
    console.log("ali")
    console.log(data);
    this.nbreInvoices=data;
    console.log("aloulou")
    console.log(this.nbreInvoices);


}
  )

}


totalproviders(){

  this.providerService.getTotalProviders().subscribe(data =>{
    console.log("zak")
    console.log(data);
    this.nbreProviders=data;
    console.log("zikou")
    console.log(this.nbreProviders);


}
  )

}


totalproducts(){

  this.productService.getTotalProducts().subscribe(data =>{
    console.log("zak")
    console.log(data);
    this.nbreProducts=data;
    console.log("zikou")
    console.log(this.nbreProducts);


}
  )

}

}