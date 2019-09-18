import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public URL = 'https://api.themoviedb.org/3/movie/';
  public TOKEN = 'aa031ed471a4250c5a6cc55678ff4083';
  public LANGUAGE = `&language=fr-FR`;

  constructor(private httpClient: HttpClient) {}

  getPopular(): Observable<any> {
    return this.httpClient.get(
      this.URL + `popular?api_key=` + this.TOKEN + this.LANGUAGE
    );
  }

  getnowPLaying(): Observable<any> {
    return this.httpClient.get(
      this.URL + `now_playing?api_key=` + this.TOKEN + this.LANGUAGE
    );
  }

  getBestRated(): Observable<any> {
    return this.httpClient.get(
      this.URL + `top_rated?api_key=` + this.TOKEN + this.LANGUAGE
    );
  }
  getUpcoming(): Observable<any> {
    return this.httpClient.get(
      this.URL + `upcoming?api_key=` + this.TOKEN + this.LANGUAGE
    );
  }

  getMovie(movieId: number): Observable<any> {
    return this.httpClient.get(
      this.URL + `${movieId}?api_key=` + this.TOKEN + this.LANGUAGE
    );
  }

  getVideo(movieId: number): Observable<any> {
    return this.httpClient.get(
      this.URL + `${movieId}/videos?api_key=` + this.TOKEN + this.LANGUAGE
    );
  }
}
