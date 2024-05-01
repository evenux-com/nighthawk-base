import { Component } from '@angular/core';
import { NighthawkPaginationComponent } from '@evenux.com/nighthawk-angular-devkit

@Component({
  standalone: true,
  selector: 'app-pagination-demo',
  imports: [NighthawkPaginationComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {}
