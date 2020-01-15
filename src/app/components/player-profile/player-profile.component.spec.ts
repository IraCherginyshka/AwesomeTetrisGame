import { MockProvider } from 'ngx-mock-provider';
import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayerProfileComponent } from './player-profile.component';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { GameResult } from '../../models/game-result.model';

describe('PlayerProfileComponent', () => {
  let component: PlayerProfileComponent;
  let fixture: ComponentFixture<PlayerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, ToastrModule.forRoot()],
      declarations: [PlayerProfileComponent, ToastContainerDirective],
      providers: [
        MockProvider({
          provider: UserService,
        }),
        MockProvider({
          provider: GameService,
          overwrite: {
            getPlayerGameResult(): Observable<GameResult[]> {
              return of([]);
            },
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should set user information to currentUser field from localStorage', () => {
    const user = {
      username: 'TestName',
      password: 'password',
      gender: 'test',
      dateOfBirth: 'testDate',
      country: 'test country',
      avatar: 'testURL',
    };

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(user);
    });

    component.ngOnInit();
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(component.currentUser).toEqual(user);
  });
});
