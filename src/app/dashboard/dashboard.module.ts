import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard.component';
import { CardComponent } from './component/card/card.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    PaginationComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
