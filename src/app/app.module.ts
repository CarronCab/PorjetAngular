import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
