import { Component, OnInit } from '@angular/core';
import { Film } from '../services/film.interface';
import { FilmsService } from '../services/films.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upcoming-films',
  templateUrl: './upcoming-films.component.html',
  styleUrls: ['./upcoming-films.component.scss']
})
export class UpcomingFilmsComponent implements OnInit {
  upcoming: Film[] = [];
  constructor(private filmService: FilmsService, private router: Router) {}

  ngOnInit() {
    this.filmService.getUpcoming().subscribe((res: any) => {
      const data = res.results;
      data.forEach(element => {
        this.upcoming.push(element);
      });
    });
  }

  viewDetail(filmId: number) {
    this.router.navigate([`/details/${filmId}`]);
  }
}
