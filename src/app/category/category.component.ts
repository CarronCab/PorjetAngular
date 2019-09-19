import {Component, OnInit} from '@angular/core';
import {Genre, Categories} from '../services/film.interface';
import {FilmsService} from '../services/films.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Categories[] = [];
  genres: Genre[] = [];
  genre: string;

  constructor(private filmService: FilmsService, private router: Router) {
  }

  ngOnInit() {
    this.filmService.getCategories().subscribe((res: any) => {
      this.categories.push(res);
      this.genres.push(this.categories[0].genres as Genre);

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.genres[0].length; i++) {
        this.genre = this.genres[0][i].id;

        this.filmService.getTheMostPopularMovieByCategories(this.genre).subscribe((res2: any) => {
          this.genres[0][i].poster = res2.results[3].poster_path;
        });
      }
    });
  }

  viewDetail(genreId: number) {
    this.router.navigate([`/genre/${genreId}`]);
  }
}
