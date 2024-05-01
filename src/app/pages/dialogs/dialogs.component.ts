import { Component } from '@angular/core';
import { take } from 'rxjs';
import { PageComponent } from '../../components/page/page.component';
import {
  NighthawkButtonDirective,
  NighthawkConfirmationService,
  NighthawkDialogService,
  NighthawkNotificationService,
} from '@evenux.com/nighthawk-angular-devkit';
import { DialogSampleComponent } from '../../components/dialog-sample/dialog-sample.component';

@Component({
  standalone: true,
  selector: 'app-dialogs',
  imports: [PageComponent, NighthawkButtonDirective],
  providers: [NighthawkConfirmationService, NighthawkNotificationService],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.scss',
})
export class DialogsComponent {
  constructor(
    private readonly confirmationService: NighthawkConfirmationService,
    private readonly notificationService: NighthawkNotificationService,
    private readonly dialogService: NighthawkDialogService
  ) {}

  public openConfirmation(): void {
    const ref = this.confirmationService.show(
      'Confirmation',
      'This is a sample confirmation - do you agree?',
      'Agree',
      'Cancel'
    );
    ref.componentInstance?.dialogRef.closed
      .pipe(take(1))
      .subscribe((result: any) => {
        this.notificationService.show(
          'Confirmation',
          `You did ${result ? 'indeed' : 'not'} agree...`
        );
      });
  }

  public openNotification(): void {
    this.notificationService.show(
      'Notification',
      'This is a sample notification you can display...'
    );
  }

  public openDialogSample(): void {
    const ref = this.dialogService.open(DialogSampleComponent, {
      disableClose: true,
      closeOnNavigation: true,
    });

    ref.closed.pipe(take(1)).subscribe((result) => {
      console.log(result);
    });
  }
}
