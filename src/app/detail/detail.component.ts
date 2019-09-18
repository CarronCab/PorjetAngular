import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../services/film.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  actualMovie: Film;
  loaded = false;

  filmId = this.route.snapshot.params.id;

  constructor(private filmService: FilmsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filmService.getMovie(this.filmId).subscribe((res: any) => {
      this.actualMovie = res;
      console.log(this.actualMovie);
      this.loaded = true;
    });
  }

}
