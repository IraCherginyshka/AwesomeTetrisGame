import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { PlayerData } from '../../interfaces/playerData.interface';

@Component({
  selector: 'atg-game-login-form',
  templateUrl: './game-login-form.component.html',
  styleUrls: ['./game-login-form.component.scss'],
})
export class GameLoginFormComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public logInForm: FormGroup;
  public signUpForm: FormGroup;
  public isSignUpForm: boolean;
  public readonly genders = ['male', 'female'];

  private querySubscription: Subscription;
  private token: string;
  private currentUser: PlayerData;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    this.logInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.signUpForm = new FormGroup({
      userInformation: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        password: new FormControl(null, [
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

  onLogin(): void {
    if (this.logInForm.invalid) {
      return;
    }
    this.userService.loginUser(this.logInForm.value).subscribe(
      ({ token, user }) => {
        localStorage.setItem('access_token', token);
        localStorage.setItem('access_user', JSON.stringify(user));
        this.token = token;
        if (token) {
          this.currentUser = user;
          this.userService.setUser(user);
          this.router.navigate(['/game']).then();
        }
      },
      () => {
        this.toastrService.error('Username and/or Password incorrect. Try again.', '', {
          timeOut: 3000,
        });
      },
    );
  }

  onSignUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    this.userService.createUser(this.signUpForm.value).subscribe(
      (res) => {
        if (res) {
          this.toastrService.warning('You have successfully Signed Up! Please, LogIn');
          this.signUpForm.reset();
          this.router.navigate(['/login']);
        }
      },
      () => {
        this.signUpForm.patchValue({
          userInformation: {
            username: null,
          },
        });
        this.toastrService.error('This name is already used. Please, choose another.', '', {
          timeOut: 3000,
        });
      },
    );
  }
}
