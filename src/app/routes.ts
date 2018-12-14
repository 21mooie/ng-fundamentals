import { Routes } from "@angular/router";
import { Four0fourComponent } from "./errors/four0four/four0four.component";
import { EventsListResolverService } from "./shared/events-list-resolver.service";

import { 
    EventDetailsComponent,
    EventRouteActivator,
    EventsListComponent,
    CreateEventComponent,
} from './events/index'

export const appRoutes:Routes = [
    {path:'events', component: EventsListComponent, resolve:{events: EventsListResolverService}},
    {path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
    {path:'404', component: Four0fourComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'},
    {path:'user', loadChildren: './user/user.module#UserModule'}
]