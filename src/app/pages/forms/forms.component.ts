import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { NighthawkFormControlDirective } from '@evenux.com/nighthawk-angular-devkit';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  imports: [PageComponent, NighthawkFormControlDirective],
  standalone: true,
})
export class FormsComponent {}
