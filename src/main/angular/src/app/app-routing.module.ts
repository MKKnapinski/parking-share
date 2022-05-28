import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from './main/app.main.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
