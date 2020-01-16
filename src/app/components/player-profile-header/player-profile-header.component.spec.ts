import { Observable, of } from 'rxjs';
import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayerProfileHeaderComponent } from './player-profile-header.component';
import { UserService } from '../../services/user.service';

describe('PlayerProfileHeaderComponent', () => {
  let component: PlayerProfileHeaderComponent;
  let fixture: ComponentFixture<PlayerProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, ToastrModule.forRoot()],
      declarations: [PlayerProfileHeaderComponent, ToastContainerDirective],
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
        RouterModule,
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

      const button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();

      expect(userService.logoutUser).toHaveBeenCalled();
      expect(component.onLogout).toHaveBeenCalled();
    },
  ));
});
