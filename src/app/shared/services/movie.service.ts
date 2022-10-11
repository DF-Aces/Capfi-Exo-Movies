import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie.model";
import {map} from "rxjs/operators";
import {MovieMapper} from "../mapper/movie.mapper";
import {MovieResource} from "../resources/movie.resource";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly url = environment.datas_url;
  private readonly movieMapper = new MovieMapper();

  constructor(private readonly http: HttpClient) {
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<MovieResource[]>(this.url).pipe(
      map((movies => movies.map(movie => this.movieMapper.mapInterfaceToModel(movie))))
    )
  }
}
