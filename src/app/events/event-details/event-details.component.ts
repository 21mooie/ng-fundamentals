import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService:EventService, private route:ActivatedRoute) { }

  ngOnInit() {
   this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
