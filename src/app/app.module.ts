import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {RouterModule, Routes} from "@angular/router";
import { NoteFoundComponent } from './note-found/note-found.component';
import {AppRouterModuleModule} from "./app-router-module/app-router-module.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ManageCustomerComponent,
    ManageItemComponent,
    PlaceOrderComponent,
    ViewOrdersComponent,
    DashBoardComponent,
    NoteFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
