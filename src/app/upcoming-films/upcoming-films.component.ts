import { Component, OnInit } from "@angular/core";
import { Film } from "../services/film.interface";
import { FilmsService } from "../services/films.service";

@Component({
  selector: "app-upcoming-films",
  templateUrl: "./upcoming-films.component.html",
  styleUrls: ["./upcoming-films.component.scss"]
})
export class UpcomingFilmsComponent implements OnInit {
  upcoming: Film[] = [];
  constructor(private filmService: FilmsService) {}

  ngOnInit() {
    this.filmService.getUpcoming().subscribe((res: any) => {
      const data = res.results;
      data.forEach(element => {
        this.upcoming.push(element);
      });
    });
  }
}
