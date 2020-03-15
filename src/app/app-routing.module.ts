import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersModule} from './users/users.module';

export const routes = [
  {
    path: '', children: [
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      },
      {
        // path: 'users', loadChildren: './src/app/users/users.module#UsersModule'
        path: 'users', loadChildren: () => UsersModule
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
