import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlayerProfileHeaderComponent } from './player-profile-header.component';
import { UserService } from '../../services/user.service';

describe('PlayerProfileHeaderComponent', () => {
  let component: PlayerProfileHeaderComponent;
  let fixture: ComponentFixture<PlayerProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlayerProfileHeaderComponent],
      providers: [
        MockProvider({
          provider: UserService,
          overwrite: {
            getAuthListener(): Observable<{}> {
              return of({});
            },
            getCurrentUser(): string {
              return JSON.stringify({
                username: 'TestName',
                password: 'password',
                gender: 'test',
                dateOfBirth: '2000-01-01',
                country: 'test country',
                avatar: 'testURL',
              });
            },
            logoutUser(): Observable<object> {
              return of({});
            },
          },
        }),
        MockProvider({
          provider: ToastrService,
          methods: ['warning'],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileHeaderComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user information to currentUser field from localStorage', () => {
    const user = {
      username: 'TestName',
      password: 'password',
      gender: 'test',
      dateOfBirth: '2000-01-01',
      country: 'test country',
      avatar: 'testURL',
    };

    component.ngOnInit();
    expect(component.currentUser).toEqual(user);
  });

  it('should call logoutUser function in userService and onLogout function in component by click on button', inject(
    [UserService],
    (userService: UserService) => {
      spyOn(userService, 'logoutUser').and.callThrough();
      spyOn(component, 'onLogout').and.callThrough();

      component.onLogout();

      expect(userService.logoutUser).toHaveBeenCalled();
    },
  ));
});
