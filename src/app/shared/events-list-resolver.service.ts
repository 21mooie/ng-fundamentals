import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any>{

  constructor(private eventService: EventService) { }

  resolve(){
    //make async calls in this function
    return this.eventService.getEvents().pipe(map(events => events))
  }
}
