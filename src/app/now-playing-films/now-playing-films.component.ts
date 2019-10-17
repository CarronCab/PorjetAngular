import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Film } from '../services/film.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-now-playing-films',
  templateUrl: './now-playing-films.component.html',
  styleUrls: ['./now-playing-films.component.scss']
})
export class NowPlayingFilmsComponent implements OnInit {
  nowplaying: Film[] = [];
  constructor(private filmService: FilmsService, private router: Router) {}

  ngOnInit() {
    this.filmService.getnowPLaying().subscribe((res: any) => {
      const data = res.results;

      data.forEach(element => {
        this.nowplaying.push(element);
      });
    });
  }
  viewDetail(filmId: number) {
    this.router.navigate([`/details/${filmId}`]);
  }
}
