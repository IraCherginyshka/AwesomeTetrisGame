import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FiguresMovement } from '../enums/figures-movement.enum';

@Injectable({ providedIn: 'root' })
export class GameMovementService {
  private movementSubject = new Subject<FiguresMovement>();

  public setMoveStep(step: FiguresMovement): void {
    this.movementSubject.next(step);
  }

  public onNextStep(): Observable<FiguresMovement> {
    return this.movementSubject.asObservable();
  }
}
