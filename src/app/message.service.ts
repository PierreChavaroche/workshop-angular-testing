import { Injectable } from '@angular/core';
import { of, Observable, timer } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getContent(): Observable<string> {
    return timer(500).pipe(
      take(1),
      switchMap(() => of('you have been warned'))
    );
  }
}
