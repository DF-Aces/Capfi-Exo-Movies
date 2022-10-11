import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../shared/models/movie.model";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-movie-dialog',
  templateUrl: './create-movie-dialog.component.html',
  styleUrls: ['./create-movie-dialog.component.sass']
})
export class CreateMovieDialogComponent implements OnInit {

  movieForm: FormGroup;

  constructor(private readonly fb: FormBuilder, public readonly dialogRef: MatDialogRef<CreateMovieDialogComponent>,) {
    this.movieForm = this.fb.group({
      primaryTitle: ['', [Validators.required, Validators.minLength(2)]],
      originalTitle: ['', [Validators.required, Validators.minLength(2)]],
      startYear: [1890, [Validators.required, Validators.min(1890), Validators.maxLength(5)]]
    })
  }

  ngOnInit(): void {
  }

  public submitForm() {
    if (this.movieForm.invalid) {
      return
    }
    const movie: Movie = new Movie(
      "tt" + Math.floor(Math.random() * 1000),
      "short",
      this.movieForm.get("primaryTitle")?.value,
      this.movieForm.get("originalTitle")?.value,
      false,
      this.movieForm.get("startYear")?.value,
      undefined,
      undefined,
      undefined
    )
    this.dialogRef.close(movie);
  }

}
