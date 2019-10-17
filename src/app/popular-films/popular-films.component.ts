import { Component, OnInit } from '@angular/core';
import { Film } from '../services/film.interface';
import { FilmsService } from '../services/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.scss']
})
export class PopularFilmsComponent implements OnInit {
  popular: Film[] = [];
  constructor(private filmService: FilmsService, private router: Router) {}

  ngOnInit() {
    this.filmService.getPopular().subscribe((res: any) => {
      const data = res.results;

      data.forEach(element => {
        this.popular.push(element);
      });
    });
  }
  viewDetail(filmId: number) {
    this.router.navigate([`/details/${filmId}`]);
  }
}
