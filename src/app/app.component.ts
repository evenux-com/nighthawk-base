import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NighthawkBootstrapService } from '@evenux.com/nighthawk-angular-devkit';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  providers: [NighthawkBootstrapService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly nighthawk: NighthawkBootstrapService) {}

  public async ngOnInit(): Promise<void> {
    await this.nighthawk.loadApplication({
      fonts: ['Cutive Mono'],
    });

    this.nighthawk.isLoaded.subscribe((isLoaded) => {
      if (isLoaded) {
        console.log('Application loaded!');
      }
    });
  }
}
