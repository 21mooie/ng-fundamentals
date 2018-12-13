import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

import { EventService } from './shared/event.service';
import { ToastrService } from './shared/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component'; 
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Four0fourComponent } from './errors/four0four/four0four.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Four0fourComponent
  ],
  providers:[EventService, 
    ToastrService, 
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}
