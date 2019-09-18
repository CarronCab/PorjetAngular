import { Component, OnInit } from '@angular/core';
import { Film } from '../services/film.interface';
import { FilmsService } from '../services/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-rated-films',
  templateUrl: './best-rated-films.component.html',
  styleUrls: ['./best-rated-films.component.scss']
})
export class BestRatedFilmsComponent implements OnInit {
  bestrated: Film[] = [];
  constructor(private filmService: FilmsService, private router: Router) {}

  ngOnInit() {
    this.filmService.getBestRated().subscribe((res: any) => {
      const data = res.results;
      console.log(res);

      data.forEach(element => {
        this.bestrated.push(element);
      });
    });
  }

  viewDetail(filmId: number) {
    this.router.navigate([`/details/${filmId}`]);
  }
}
