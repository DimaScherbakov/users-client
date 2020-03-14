import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

export const routes = [
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      },
      {
        path: 'users', loadChildren: 'src/app/users/users.module#UsersModule'
      }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
