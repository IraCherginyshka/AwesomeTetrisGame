import { Component, HostListener, OnInit } from '@angular/core';
import { DefaultSettings } from '../../enums/default-settings.enum';
import { ControlsEnum } from '../../enums/controls.enum';
import { ControlsStateObject } from '../../interfaces/controlsState.interface';

@Component({
  selector: 'atg-game-control-option',
  templateUrl: './game-control-option.component.html',
  styleUrls: ['./game-control-option.component.scss'],
})
export class GameControlOptionComponent implements OnInit {
  public controls: ControlsStateObject;
  public readonly controlsEnum = ControlsEnum;
  public readonly defaultSettings = DefaultSettings;
  private isSetMode = false;
  private activeField: string;

  ngOnInit(): void {
    if (localStorage.getItem('controls')) {
      const savedControls = JSON.parse(localStorage.getItem('controls'));
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
      this.controls = {
        [ControlsEnum.RESET]: DefaultSettings.RESET,
        [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
        [ControlsEnum.PLAY]: DefaultSettings.PLAY,
        [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
        [ControlsEnum.LEFT]: DefaultSettings.LEFT,
        [ControlsEnum.DROP]: DefaultSettings.DROP,
        [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
      };
    }
  }

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    event.preventDefault();
    if (!this.isSetMode) {
      return;
    }
    this.controls = { ...this.controls, [this.activeField]: event.key };
    this.isSetMode = false;
    this.activeField = undefined;
  }

  setControl(control: ControlsEnum): void {
    this.isSetMode = true;
    this.activeField = control;
  }

  setAllControls(): void {
    localStorage.setItem('controls', JSON.stringify(this.controls));
  }
}
