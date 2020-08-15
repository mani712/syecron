import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Output() pageNumber = new EventEmitter();

  ngOnInit(): void {}

  onPage(e) {
    this.pageNumber.emit(e.target.innerHTML);
  }
}
