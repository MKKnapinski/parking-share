import {Component, OnInit} from '@angular/core';
import {UserModel} from '../model/user.model';
import {delay, Observable, of, tap} from 'rxjs';

@Component({
  templateUrl: './user-list.component.html',
  styles: [`
    :host ::ng-deep .p-frozen-column {
      font-weight: bold;
    }

    :host ::ng-deep .p-datatable-frozen-tbody {
      font-weight: bold;
    }

    :host ::ng-deep .p-progressbar {
      height: .5rem;
    }
  `]
})
export class UserListComponent implements OnInit {

  // checkbox
  // name
  // email
  // assigned space
  // assigned period
  // action

  users$: Observable<UserModel[]>;
  loading: boolean = true;

  constructor() {
    this.users$ = this.getUsers();
  }

  ngOnInit() {
  }

  private getUsers(): Observable<UserModel[]> {
    return of([])
      .pipe(
        delay(3000),
        tap(() => this.loading = false)
      )
  }
}
