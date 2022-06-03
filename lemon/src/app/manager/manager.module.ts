import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { Routes } from '@angular/router'
import { ManagerComponent } from './manager.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'

// export const managerModuleRoutes: Routes = [
//   {
//     path: '',
//     component: ManagerHomeComponent,
//   },
// ]

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent],
  imports: [CommonModule, ManagerRoutingModule, MatToolbarModule],
  exports: [MatToolbarModule],
})
export class ManagerModule {}
