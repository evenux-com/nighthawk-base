import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { NighthawkButtonDirective } from '@evenux.com/nighthawk-angular-devkit';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  imports: [PageComponent, NighthawkButtonDirective],
  standalone: true,
})
export class ButtonsComponent {}
