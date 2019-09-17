import { Component, OnInit, Input } from "@angular/core";
import { Film } from "../services/film.interface";

@Component({
  selector: "app-generic-display",
  templateUrl: "./generic-display.component.html",
  styleUrls: ["./generic-display.component.scss"]
})
export class GenericDisplayComponent implements OnInit {
  @Input() film: Film;

  constructor() {}

  ngOnInit() {
    console.log(this.film);
  }
}
