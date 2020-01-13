import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { DefaultSettings } from '../../enums/default-settings.enum';
import { ControlsEnum } from '../../enums/controls.enum';
import { ControlsStateObject } from '../../interfaces/controls-state.interface';
import { LocalStorage } from '../../enums/local-storage.enum';

@Component({
  selector: 'atg-game-control-option',
  templateUrl: './game-control-option.component.html',
  styleUrls: ['./game-control-option.component.scss'],
})
export class GameControlOptionComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public controls: ControlsStateObject;
  public readonly controlsEnum = ControlsEnum;
  public readonly defaultSettings = DefaultSettings;

  private isSetMode = false;
  private activeField: string;
  private defaultControls: ControlsStateObject;

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;

    this.defaultControls = {
      [ControlsEnum.RESET]: DefaultSettings.RESET,
      [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
      [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
      [ControlsEnum.LEFT]: DefaultSettings.LEFT,
      [ControlsEnum.DROP]: DefaultSettings.DROP,
      [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
    };

    const savedControls = JSON.parse(localStorage.getItem(LocalStorage.CONTROLS));

    if (savedControls) {
      this.controls = {
        [ControlsEnum.RESET]: savedControls.reset,
        [ControlsEnum.PAUSE]: savedControls.pause,
        [ControlsEnum.PLAY]: savedControls.play,
        [ControlsEnum.ROTATE]: savedControls.rotate,
        [ControlsEnum.LEFT]: savedControls.left,
        [ControlsEnum.DROP]: savedControls.drop,
        [ControlsEnum.RIGHT]: savedControls.right,
      };
    } else {
      this.controls = this.defaultControls;
    }
  }

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    event.preventDefault();
    if (!this.isSetMode) {
      return;
    }

    if (/[A-Za-z0-9]/.test(event.key) && !Object.values(this.controls).includes(event.key)) {
      this.controls = { ...this.controls, [this.activeField]: event.key };
      this.isSetMode = false;
      this.activeField = undefined;
    } else {
      this.toastrService.error('This symbol is incorrect', '', {
        timeOut: 3000,
      });
    }
  }

  public setControl(control: ControlsEnum): void {
    this.isSetMode = true;
    this.activeField = control;
  }

  public saveControls(): void {
    if (!this.isEqualControls()) {
      localStorage.setItem(LocalStorage.CONTROLS, JSON.stringify(this.controls));
      this.toastrService.success('You set custom controls');
    } else {
      localStorage.removeItem(LocalStorage.CONTROLS);
      this.toastrService.error('You set default controls', '', {
        timeOut: 3000,
      });
    }
  }

  public backToDefaultControls(): void {
    localStorage.removeItem(LocalStorage.CONTROLS);
    this.controls = {
      [ControlsEnum.RESET]: DefaultSettings.RESET,
      [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
      [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
      [ControlsEnum.LEFT]: DefaultSettings.LEFT,
      [ControlsEnum.DROP]: DefaultSettings.DROP,
      [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
    };

    this.toastrService.success('You set default controls');
  }

  public isEqualControls(): boolean {
    return Object.keys(this.controls).every(
      (key) => `${this.controls[key]}` === `${this.defaultControls[key]}`,
    );
  }
}
