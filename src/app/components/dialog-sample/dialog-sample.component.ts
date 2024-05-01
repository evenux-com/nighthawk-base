import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { NighthawkButtonDirective } from '@evenux.com/nighthawk-angular-devkit';

@Component({
  selector: 'app-dialog-sample',
  templateUrl: './dialog-sample.component.html',
  styleUrls: ['./dialog-sample.component.scss'],
  imports: [NighthawkButtonDirective],
  standalone: true,
})
export class DialogSampleComponent {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef<boolean>
  ) {}
}
