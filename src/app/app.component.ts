import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {FilmsService} from './services/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetWeb';
  keyWord = new FormControl('', Validators.required);

  constructor(public router: Router, private filmService: FilmsService) {

  }

  onAmountChange(event: any) {
    this.router.navigate(['/'], {queryParams: {keyWord: this.keyWord.value}});
  }

  isHomeRoute() {
    return (this.router.url === '/category' || this.router.url.includes('/genre/'));
  }
}
