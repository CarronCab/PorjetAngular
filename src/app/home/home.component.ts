import { Component, OnInit } from "@angular/core";
import { Film } from "../services/film.interface";
import { FilmsService } from "../services/films.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  popular: Film[] = [];
  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.filmService.getPopular().subscribe((res: any) => {
      const data = res.results;
      console.log(res);

      data.forEach(element => {
        this.popular.push(element);
      });
    });
  }
}
