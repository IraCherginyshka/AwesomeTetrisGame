import { ToastrService } from 'ngx-toastr';
import { MockProvider } from 'ngx-mock-provider';
import { MockComponent } from 'ng2-mock-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, MockComponent({ selector: 'atg-game-header' })],
      providers: [
        MockProvider({
          provider: ToastrService,
          methods: ['warning', 'error', 'success'],
        }),
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'AwesomeTetrisGame'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AwesomeTetrisGame');
  });
});
