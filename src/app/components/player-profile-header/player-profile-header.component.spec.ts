import { Observable, of } from 'rxjs';
import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
});
