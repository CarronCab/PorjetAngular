import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../services/film.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-generic-display',
  templateUrl: './generic-display.component.html',
  styleUrls: ['./generic-display.component.scss']
})
export class GenericDisplayComponent implements OnInit {
  @Input() film: Film;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.film);
  }

  viewDetail(filmId: number) {
    this.router.navigate([`/details/${filmId}`]);
  }
}
