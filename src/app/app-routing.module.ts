import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { NowPlayingFilmsComponent } from './now-playing-films/now-playing-films.component';
import { UpcomingFilmsComponent } from './upcoming-films/upcoming-films.component';
import { BestRatedFilmsComponent } from './best-rated-films/best-rated-films.component';
import { DetailComponent } from './detail/detail.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'bestRatedFilms', component: BestRatedFilmsComponent },
  { path: 'upComingFilms', component: UpcomingFilmsComponent },
  { path: 'popularFilms', component: PopularFilmsComponent },
  { path: 'nowPlayingFilms', component: NowPlayingFilmsComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: 'category', component: CategoryComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
