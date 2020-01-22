import { ToastrService } from 'ngx-toastr';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlOptionComponent } from './game-control-option.component';
import { ControlsEnum } from '../../enums/controls.enum';
import { DefaultSettings } from '../../enums/default-settings.enum';
import { LocalStorage } from '../../enums/local-storage.enum';

describe('GameControlOptionComponent', () => {
  let component: GameControlOptionComponent;
  let fixture: ComponentFixture<GameControlOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameControlOptionComponent],
      providers: [
        MockProvider({
          provider: ToastrService,
          methods: ['error', 'success'],
        }),
      ],
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

  it('should call the saveControls function by clicking on button Default and set default value to controls', () => {
    const defaultControls = {
      [ControlsEnum.RESET]: DefaultSettings.RESET,
      [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
      [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
      [ControlsEnum.LEFT]: DefaultSettings.LEFT,
      [ControlsEnum.DROP]: DefaultSettings.DROP,
      [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
    };

    component.backToDefaultControls();

    expect(component.controls).toEqual(defaultControls);
  });

  it('should call the setControl function by clicking on block and set controls type to activeField', () => {
    component.setControl(ControlsEnum.PLAY);

    expect(component.activeField).toBe('play');
  });

  it('should save controls in localStorage if they are equal to the default controls by calling saveControls function', () => {
    const customControls = {
      reset: 'o',
      pause: 'p',
      play: 'enter',
      rotate: 'k',
      left: 'ArrowLeft',
      drop: 'ArrowDown',
      right: 'ArrowRight',
    };

    component.controls = customControls;
    component.saveControls();
    expect(localStorage.getItem(LocalStorage.CONTROLS)).toEqual(JSON.stringify(customControls));
  });

  it('should not save controls in localStorage if they are equal to the default controls by calling saveControls function', () => {
    const defaultControls = {
      [ControlsEnum.RESET]: DefaultSettings.RESET,
      [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
      [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
      [ControlsEnum.LEFT]: DefaultSettings.LEFT,
      [ControlsEnum.DROP]: DefaultSettings.DROP,
      [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
    };

    component.controls = defaultControls;
    component.saveControls();
    expect(localStorage.getItem(LocalStorage.CONTROLS)).toBeNull();
  });

  it('should not set a new keyboard to controls if not change isSetMode', () => {
    const event = new KeyboardEvent('keypress', {
      key: 'f',
    });
    fixture.nativeElement.dispatchEvent(event);

    component.keyBoardInput(event);

    expect(component.controls.right).not.toBe('f');
  });

  it('should set a new keyboard to controls if it is valid and unique', () => {
    component.setControl(ControlsEnum.RIGHT);

    const event = new KeyboardEvent('keypress', {
      key: 'f',
    });
    fixture.nativeElement.dispatchEvent(event);

    component.keyBoardInput(event);

    expect(component.controls.right).toBe('f');
  });

  it('should not set a new keyboard to controls if it is no unique', () => {
    component.setControl(ControlsEnum.RIGHT);

    const event = new KeyboardEvent('keypress', {
      key: 'p',
    });
    fixture.nativeElement.dispatchEvent(event);

    component.keyBoardInput(event);

    expect(component.controls.right).not.toBe('p');
  });

  it('should not set a new keyboard to controls if it is no valid', () => {
    component.setControl(ControlsEnum.RIGHT);

    const event = new KeyboardEvent('keypress', {
      key: 'г',
    });
    fixture.nativeElement.dispatchEvent(event);

    component.keyBoardInput(event);

    expect(component.controls.right).not.toBe('г');
  });
});
