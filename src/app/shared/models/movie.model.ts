export class Movie  {
  constructor(
    public id: string,
    public titleType: string,
    public primaryTitle: string,
    public originalTitle: string,
    public isAdult: boolean,
    public startYear: number | undefined,
    public endYear: number | undefined,
    public runtimeMinutes: number | undefined,
    public genres: string | undefined
  ) {}
}
