import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Four0fourComponent } from "./errors/four0four/four0four.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListResolverService } from "./shared/events-list-resolver.service";

export const appRoutes:Routes = [
    {path:'events', component: EventsListComponent, resolve:{events: EventsListResolverService}},
    {path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
    {path:'404', component: Four0fourComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'}
]