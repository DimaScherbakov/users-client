import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerUsersTableComponent} from './container-users-table/container-users-table.component';


const routes: Routes = [
  {path: '', component: ContainerUsersTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
