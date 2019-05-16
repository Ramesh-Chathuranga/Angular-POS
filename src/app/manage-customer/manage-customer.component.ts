import { Component, OnInit } from '@angular/core';
import {Customer} from "../dto/customer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {
  customers:Customer[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {

   this.loadAllCustomer();


    }

    saveCustomer(id:string,name:string,address:string):void{
     this.http.post("http://localhost:8080/api/v1/customers" , new Customer(id,name,address),{observe:'response'}).subscribe(res => {
       if(res.status==201){
         this.loadAllCustomer();
         alert("Customer has beensave successfully")
       }else {
         alert("Failed to save the customer")
       }
     })
    }

    loadAllCustomer():void{
      this.http.get<Customer[]>("http://localhost:8080/api/v1/customers").subscribe(customers=>{
        this.customers=customers;
      });

    }

  deleteCustomer(customer:Customer):void{
    this.http.delete("http://localhost:8080/api/v1/customers/"+customer.id,{observe:'response'}).subscribe(res=>{
      if(res.status==200){
        this.loadAllCustomer();
      }else {
        alert("failed to delete the customer")
      }
    })
  }

}
