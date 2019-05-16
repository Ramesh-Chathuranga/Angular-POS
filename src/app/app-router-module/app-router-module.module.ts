import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "../dash-board/dash-board.component";
import {ManageCustomerComponent} from "../manage-customer/manage-customer.component";
import {ManageItemComponent} from "../manage-item/manage-item.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";
import {ViewOrdersComponent} from "../view-orders/view-orders.component";
import {NoteFoundComponent} from "../note-found/note-found.component";




const appRoutes:Routes=[
  {
    path:"dash-board",
    component:DashBoardComponent
  },
  {
    path:"manage-customer",
    component:ManageCustomerComponent
  },
  {
    path:"manage-item",
    component:ManageItemComponent
  },
  {
    path:"place-order",
    component:PlaceOrderComponent
  },
  {
    path:"view-orders",
    component:ViewOrdersComponent
  },
  {
    path:"",
    redirectTo:"dash-board",
    pathMatch:"full"
  },
  {
    path:"**",
    component:NoteFoundComponent
  }
];
@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRouterModuleModule { }
