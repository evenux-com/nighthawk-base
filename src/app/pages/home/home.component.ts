import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [PageComponent],
  standalone: true,
})
export class HomeComponent {}
