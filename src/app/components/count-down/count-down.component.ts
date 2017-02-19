import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'wp-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {
  private subscription;

  public vm_days = 0;
  public vm_hours = 0;
  public vm_minutes = 0;
  public vm_seconds = 0;

  constructor() { }

  ngOnInit() {
    const weddingDate = new Date('Aug 13, 2017 15:00:00').getTime(),
      timer = TimerObservable.create(2000, 1000);

    this.subscription = timer.subscribe(t => {
      this.getTimeRemaining(weddingDate);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTimeRemaining(endtime) {
    const currentDate: number = (new Date()).getTime(),
      t = endtime - currentDate,
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    this.vm_days = days;
    this.vm_hours = hours;
    this.vm_minutes = minutes;
    this.vm_seconds = seconds;
  };

}
