import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  @Input()
  placeholder : string = 'Chercher par Primary Title | Original Title | Start Year...';
  @Output()
  emitValue : EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe(s => {
      this.emitValue.emit(s);
    })
  }

}
