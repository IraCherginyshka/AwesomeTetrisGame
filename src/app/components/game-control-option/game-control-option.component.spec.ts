import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameControlOptionComponent } from './game-control-option.component';
import { ControlsEnum } from '../../enums/controls.enum';
import { DefaultSettings } from '../../enums/default-settings.enum';

describe('GameControlOptionComponent', () => {
  let component: GameControlOptionComponent;
  let fixture: ComponentFixture<GameControlOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ToastrModule.forRoot()],
      declarations: [GameControlOptionComponent, ToastContainerDirective],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlOptionComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default controls to controls field on load', () => {
    const defaultControls = {
      [ControlsEnum.RESET]: DefaultSettings.RESET,
      [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
      [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
      [ControlsEnum.LEFT]: DefaultSettings.LEFT,
      [ControlsEnum.DROP]: DefaultSettings.DROP,
      [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
    };

    component.ngOnInit();
    expect(component.controls).toEqual(defaultControls);
  });

  it("should set custom controls to controls field if localStorage has 'controls' item on load", () => {
    const customControls = {
      reset: 'o',
      pause: 'p',
      play: 'enter',
      rotate: 'k',
      left: 'ArrowLeft',
      drop: 'ArrowDown',
      right: 'ArrowRight',
    };

    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(customControls);
    });

    component.ngOnInit();
    expect(window.localStorage.getItem).toHaveBeenCalled();
    expect(component.controls).toEqual(customControls);
  });

  it('should call the saveControls function by clicking on button', () => {
    spyOn(component, 'saveControls').and.callThrough();

    const button = fixture.debugElement.nativeElement.querySelector('#custom');
    button.click();

    expect(component.saveControls).toHaveBeenCalled();
  });

  it('should call the saveControls function by clicking on button Default and set default value to controls', () => {
    spyOn(component, 'backToDefaultControls').and.callThrough();

    const defaultControls = {
      [ControlsEnum.RESET]: DefaultSettings.RESET,
      [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
      [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
      [ControlsEnum.LEFT]: DefaultSettings.LEFT,
      [ControlsEnum.DROP]: DefaultSettings.DROP,
      [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
    };

    const button = fixture.debugElement.nativeElement.querySelector('#default');
    button.click();

    expect(component.backToDefaultControls).toHaveBeenCalled();
    expect(component.controls).toEqual(defaultControls);
  });

  it('should call the setControl function by clicking on block and set controls type to activeField', () => {
    spyOn(component, 'setControl').and.callThrough();

    const block = fixture.debugElement.nativeElement.querySelector('#play');
    block.click();

    expect(component.setControl).toHaveBeenCalled();
    expect(component.activeField).toBe('play');
  });
});
