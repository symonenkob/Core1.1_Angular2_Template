import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { routing, routedComponents } from './app.routing';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';

enableProdMode();

@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations: [AppComponent, routedComponents, ],
    providers: [Title, { provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }