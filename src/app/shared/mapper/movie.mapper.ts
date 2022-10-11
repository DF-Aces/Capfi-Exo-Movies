import {Movie} from "../models/movie.model";
import {MovieResource} from "../resources/movie.resource";

export class MovieMapper {

  public mapInterfaceToModel(movie: MovieResource): Movie {
    return new Movie(
      movie.tconst,
      movie.titleType,
      movie.primaryTitle,
      movie.originalTitle,
      this.transformToBoolean(movie.isAdult),
      this.transformStringToNumber(movie.startYear),
      this.transformStringToNumber(movie.endYear),
      this.transformStringToNumber(movie.runtimeMinutes),
      this.stringOrUndefined(movie.genres)
    )
  }

  private transformToBoolean(str: string): boolean {
    return Boolean(Number(str));
  }

  private transformStringToNumber(str: string): number | undefined {
    const nbr: number = Number(str);
    return isNaN(nbr) ? undefined : nbr;
  }

  private stringOrUndefined(str: string): string | undefined {
    return "\\N" === str ? undefined : str;
  }
}
