import { MockComponent } from 'ng2-mock-component';
import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameHeaderComponent } from './game-header.component';
import { UserService } from '../../services/user.service';

describe('GameHeaderComponent', () => {
  let component: GameHeaderComponent;
  let fixture: ComponentFixture<GameHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GameHeaderComponent, MockComponent({ selector: 'atg-player-profile-header' })],
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
          },
        }),
        MockProvider({
          provider: ToastrService,
          methods: ['info', 'success'],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeaderComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
