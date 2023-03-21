import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  itemsPerPage = [5, 10, 15, 20]

  getNewList(limit: number) {

  }
}
