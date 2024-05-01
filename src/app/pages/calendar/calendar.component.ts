import { Component } from '@angular/core';
import { NighthawkCalendarComponent } from '@evenux.com/nighthawk-angular-devkit';
import { PageComponent } from '../../components/page/page.component';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [PageComponent, NighthawkCalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  public month: number = new Date().getMonth() + 1;
  public year: number = new Date().getFullYear();
}
