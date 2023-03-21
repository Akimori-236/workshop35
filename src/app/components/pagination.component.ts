import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GameService } from '../GameService';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  itemsPerPage = [5, 10, 15, 20] // presets
  limit: number = 10
  offset: number = 0

  pageForm!: FormGroup

  constructor(private fb: FormBuilder, private gameSvc: GameService) { }

  ngOnInit(): void {
    this.pageForm = this.fb.group({
      limit: this.fb.control<number>(this.limit, [Validators.required]),
    })
    // trigger service on init
    // triggering it here so that i can comtrol limit and offset in one place
    this.gameSvc.getGames({ limit: this.limit, offset: this.offset })
  }

  limitChange() {
    // get form control
    const limitCtrl = this.pageForm.get('limit') as FormControl
    // get new value as int
    this.limit = parseInt(limitCtrl.value);
    console.debug("new limit > " + this.limit);
    // trigger service
    this.gameSvc.getGames({
      limit: this.limit,
      offset: this.offset
    })
  }

  next() {
    this.offset += this.limit
    console.debug("new offset > " + this.offset)
    // trigger service
    this.gameSvc.getGames({
      limit: this.limit,
      offset: this.offset
    })
  }

  previous() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit
    }
    console.debug("new offset > " + this.offset)
    // trigger service
    this.gameSvc.getGames({
      limit: this.limit,
      offset: this.offset
    })
  }
}
