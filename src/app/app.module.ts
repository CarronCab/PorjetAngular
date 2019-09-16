import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { HeaderComponent } from "./header/header.component";
import { GenericDisplayComponent } from "./generic-display/generic-display.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BestRatedFilmsComponent } from "./best-rated-films/best-rated-films.component";
import { UpcomingFilmsComponent } from "./upcoming-films/upcoming-films.component";
import { NowPlayingFilmsComponent } from "./now-playing-films/now-playing-films.component";
import { PopularFilmsComponent } from "./popular-films/popular-films.component";
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
  MatTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
    AppRoutingModule,
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
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    GenericDisplayComponent,
    PageNotFoundComponent,
    BestRatedFilmsComponent,
    UpcomingFilmsComponent,
    NowPlayingFilmsComponent,
    PopularFilmsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
