import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ContainerUsersTableComponent } from './container-users-table/container-users-table.component';

@NgModule({
  declarations: [ContainerUsersTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
