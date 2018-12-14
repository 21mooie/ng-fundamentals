import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

import { 
  EventDetailsComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventsListComponent,
  CreateEventComponent,
} from './events/index'

import { EventService } from './shared/event.service';
import { ToastrService } from './shared/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Four0fourComponent } from './errors/four0four/four0four.component';
import { EventsListResolverService } from './shared/events-list-resolver.service';

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
    EventsListResolverService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}
