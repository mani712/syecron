import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {
  faGripHorizontal,
  faGripLines,
} from '@fortawesome/free-solid-svg-icons';
import { Album } from '../model/album';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: Album[] = [];
  display: boolean = false;
  gripHorizontal = faGripHorizontal;
  gripLines = faGripLines;
  searchText: string;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.dashboardService.getData().subscribe((items: Album[]) => {
      this.data = items;
    });
  }

  dataGrid(show: boolean): void {
    this.display = show;
  }

  onPage(e): void {
    console.log(e.target.value);
  }
}
