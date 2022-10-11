import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from "../shared/services/movie.service";
import {combineLatest, merge, Observable} from "rxjs";
import {Movie} from "../shared/models/movie.model";
import {FormControl} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {CreateMovieDialogComponent} from "./create-movie-dialog/create-movie-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  @ViewChild(MatSort) set content(sort: MatSort) {
    if (sort) {
      this.movieDatas.sort = sort;
    }
  }

  loader = true;
  movieDatas: MatTableDataSource<Movie> = new MatTableDataSource();
  displayedColumns: string[] = ['primaryTitle', 'originalTitle', 'startYear', 'endYear', 'runtimeMinutes', 'genres'];

  constructor(private readonly movieService: MovieService, private readonly dialog: MatDialog) {
    this.movieService.getMovies().subscribe(movies => {
      this.movieDatas = new MatTableDataSource<Movie>(movies);
      this.loader = false;
    })
  }

  ngOnInit(): void {
  }

  openDialogMovie() {
    const dialogRef = this.dialog.open(CreateMovieDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.movieDatas.data.push(result)
      }
    });
  }

  changeValue(value: string) {
    this.movieDatas.filter = value.trim().toLowerCase();
  }
}
