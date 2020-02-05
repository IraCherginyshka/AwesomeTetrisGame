import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  public blockSize: number;
  private resizeSubject = new Subject<number>();

  public setBlockSize(size: number): void {
    this.blockSize = size;
    this.resizeSubject.next();
  }

  public onResizeBlock(): Observable<number> {
    return this.resizeSubject.asObservable();
  }
}
