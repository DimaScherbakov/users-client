import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ContainerUsersTableComponent } from './container-users-table/container-users-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [ContainerUsersTableComponent, UsersTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class UsersModule { }
