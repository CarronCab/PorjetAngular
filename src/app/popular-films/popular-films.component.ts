import { Component, OnInit } from "@angular/core";
import { Film } from "../services/film.interface";
import { FilmsService } from "../services/films.service";

@Component({
  selector: "app-popular-films",
  templateUrl: "./popular-films.component.html",
  styleUrls: ["./popular-films.component.scss"]
})
export class PopularFilmsComponent implements OnInit {
  popular: Film[] = [];
  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.filmService.getPopular().subscribe((res: any) => {
      const data = res.results;

      data.forEach(element => {
        this.popular.push(element);
      });
    });
  }
}
