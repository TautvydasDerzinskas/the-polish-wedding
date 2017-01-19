import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Rx";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
	selector: "app-count-down",
	templateUrl: "./count-down.component.html",
	styleUrls: ["./count-down.component.scss"]
})
export class CountDownComponent implements OnInit, OnDestroy  {

	constructor() {}

	private subscription;

	ngOnInit() {
		const weddingDate = "Aug 13 2017",
			timer = TimerObservable.create(2000, 1000);

		this.subscription = timer.subscribe(t => {
			this.getTimeRemaining(weddingDate)
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	public vm_days: number = 0;
	public vm_hours: number = 0;
	public vm_minutes: number = 0;
	public vm_seconds: number = 0;

	private getTimeRemaining(endtime){
		console.log(endtime);

		const currentDate: string = (new Date()).toDateString(),
			t = Date.parse(endtime) - Date.parse(currentDate),
			seconds = Math.floor( (t / 1000) % 60 ),
			minutes = Math.floor( (t / 1000 / 60) % 60 ),
			hours = Math.floor( (t / (1000 * 60 * 60)) % 24 ),
			days = Math.floor( t / (1000 * 60 * 60 * 24) );

		this.vm_days = days;
		this.vm_hours = hours;
		this.vm_minutes = minutes;
		this.vm_seconds = seconds;
	};

}
