import {Component, OnDestroy} from '@angular/core';
import {Observable, scan, takeWhile, timer} from 'rxjs';

@Component({
  selector: 'app-session-counter',
  templateUrl: './session-counter.component.html',
  styleUrls: ['./session-counter.component.scss']
})
export class SessionCounterComponent implements OnDestroy {
  private readonly SESSION_DURATION_SECONDS: number = 900;
  public countdown$: Observable<number>;
  private currentState: number = this.SESSION_DURATION_SECONDS;

  constructor() {
    this.countdown$ = timer(0, 1000)
      .pipe(
        scan(() => --this.currentState, this.SESSION_DURATION_SECONDS),
        takeWhile(x => x >= 0)
      )
  }

  ngOnDestroy(): void {
  }
}
