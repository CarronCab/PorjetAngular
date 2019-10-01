import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Film} from '../services/film.interface';
import {FilmsService} from '../services/films.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  nowplaying: Film[] = [];
  popular: Film[] = [];
  sub: Subscription;
  keyWord: string;
  mySubscription: any;

  constructor(private filmService: FilmsService, private route: ActivatedRoute, private router: Router) {

    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });

  }

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
          this.keyWord = params.keyWord;
          console.log('mot cles   ' + this.keyWord);
        }
      );

    if (!this.keyWord) {
      console.log('1');
      this.filmService.getPopular().subscribe((res: any) => {
        const data = res.results;
        data.forEach(element => {
          this.popular.push(element);
        });
      });
    } else {
      this.popular.length = 0;
      this.popular = [];
      console.log('2');
      this.filmService.getMovies(this.keyWord).subscribe((res: any) => {
        const data = res.results;
        data.forEach(element => {
          this.popular.push(element);
        });
        console.log(this.popular);
      });
    }
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
