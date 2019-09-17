import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { GenericDisplayComponent } from './generic-display/generic-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BestRatedFilmsComponent } from './best-rated-films/best-rated-films.component';
import { UpcomingFilmsComponent } from './upcoming-films/upcoming-films.component';
import { NowPlayingFilmsComponent } from './now-playing-films/now-playing-films.component';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatTooltipModule,
  MatLineModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatLineModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    GenericDisplayComponent,
    PageNotFoundComponent,
    BestRatedFilmsComponent,
    UpcomingFilmsComponent,
    NowPlayingFilmsComponent,
    PopularFilmsComponent,
    CategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
