import { Component, OnInit } from '@angular/core';
import {Categories, Film, Genre} from '../services/film.interface';
import {FilmsService} from '../services/films.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genreId = this.route.snapshot.params.id;
  films: Film[] = [];
  genre: string;
  categories: Categories[] = [];
  genres: Genre[] = [];

  constructor(private filmService: FilmsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.filmService.getTheMostPopularMovieByCategories(this.genreId).subscribe((res: any) => {
      const data = res.results;
      data.forEach(element => {
        this.films.push(element);
      });
    });

    this.filmService.getCategories().subscribe((res: any) => {
      this.categories.push(res);
      this.genres.push(this.categories[0].genres as Genre);

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.genres[0].length; i++) {
        // tslint:disable-next-line:triple-equals
        if (this.genres[0][i].id == this.genreId) {
          this.genre = this.genres[0][i].name;
        }
      }
    });
  }

  viewDetail(filmId: number) {
    this.router.navigate([`/details/${filmId}`]);
  }
}
