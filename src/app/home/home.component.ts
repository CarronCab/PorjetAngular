import { Component, OnInit } from '@angular/core';
import { Film } from '../services/film.interface';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowplaying: Film[] = [];
  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.filmService.getnowPLaying().subscribe((res: any) => {
      const data = res.results;
      console.log(res);

      data.forEach(element => {
        this.nowplaying.push(element);
      });
    });
  }
}
