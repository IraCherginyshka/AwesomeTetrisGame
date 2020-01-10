import { DefaultSettings } from '../enums/default-settings.enum';

export interface ControlsStateObject {
  reset: string | DefaultSettings;
  pause: string | DefaultSettings;
  play: string | DefaultSettings;
  rotate: string | DefaultSettings;
  left: string | DefaultSettings;
  drop: string | DefaultSettings;
  right: string | DefaultSettings;
  [x: string]: string | DefaultSettings;
}
