import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from '../../components/page/page.component';
import {
  NighthawkCheckboxComponent,
  NighthawkFormControlDirective,
  NighthawkRadiosComponent,
} from '@evenux.com/nighthawk-angular-devkit';

@Component({
  standalone: true,
  selector: 'app-check',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PageComponent,
    NighthawkFormControlDirective,
    NighthawkCheckboxComponent,
    NighthawkRadiosComponent,
  ],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.scss',
})
export class ChecksComponent {
  public checkbox1: boolean = false;
  public checkbox2: boolean = false;
  public checkbox3: boolean = false;

  public radio1: number = 1;
  public radio2: number = 1;
  public radio3: number = 1;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public radioOptions: any[] = [
    { label: 'Large 1', value: 1 },
    { label: 'Large 2', value: 2 },
    { label: 'Disabled', disabled: true },
  ];
}
