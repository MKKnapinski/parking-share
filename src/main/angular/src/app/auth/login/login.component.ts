import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

export const LOGIN_PAGE = '[Login Page]'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

    this.form = formBuilder.group({
      email: [undefined, [Validators.required]],
      password: [undefined, [Validators.required]]
    })

  }

  ngOnInit(): void {
    console.log(this.authService.getLoggedUser())
  }

  login(): void {
  }

}
