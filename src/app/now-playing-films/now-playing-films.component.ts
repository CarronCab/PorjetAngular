import { Component, OnInit } from "@angular/core";
import { FilmsService } from "../services/films.service";
import { Film } from "../services/film.interface";

@Component({
  selector: "app-now-playing-films",
  templateUrl: "./now-playing-films.component.html",
  styleUrls: ["./now-playing-films.component.scss"]
})
export class NowPlayingFilmsComponent implements OnInit {
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
