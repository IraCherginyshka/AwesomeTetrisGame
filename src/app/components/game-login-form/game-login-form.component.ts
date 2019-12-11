import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'atg-game-login-form',
  templateUrl: './game-login-form.component.html',
  styleUrls: ['./game-login-form.component.scss'],
})
export class GameLoginFormComponent implements OnInit {
  public logInForm: FormGroup;
  public signUpForm: FormGroup;
  public genders: string[];
  public isSignUpForm: boolean;

  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.genders = ['male', 'female'];
  }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.signUpForm = new FormGroup({
      userInformation: new FormGroup({
        usernameSignUp: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
        passwordSignUp: new FormControl(null, [
          Validators.required,
          Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}'),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
      }),
      playerInformation: new FormGroup({
        gender: new FormControl('male'),
        dateOfBirth: new FormControl(null, Validators.required),
        country: new FormControl('Ukraine'),
      }),
    });

    this.querySubscription = this.route.queryParams.subscribe((queryParam: Params) => {
      this.isSignUpForm = queryParam.form;
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }
}
