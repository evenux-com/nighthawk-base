import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NighthawkDropdownTriggerForDirective,
  NighthawkDropdownComponent,
  NighthawkButtonDirective,
} from '@evenux.com/nighthawk-angular-devkit';
import { PageComponent } from '../../components/page/page.component';

@Component({
  standalone: true,
  selector: 'app-dropdowns',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PageComponent,
    NighthawkButtonDirective,
    NighthawkDropdownComponent,
    NighthawkDropdownTriggerForDirective,
  ],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss',
})
export class DropdownsComponent {}
