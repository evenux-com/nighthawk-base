import { Component } from '@angular/core';
import { NighthawkSwiperComponent } from '@evenux.com/nighthawk-angular-devkit';
import { PageComponent } from '../../components/page/page.component';

@Component({
  standalone: true,
  selector: 'app-swiper',
  imports: [PageComponent, NighthawkSwiperComponent],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
})
export class SwiperComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public bigSwiperConfig: any = {
    slidesPerView: 1,
    pagination: {
      enabled: true,
    },
    navigation: {
      enabled: true,
    },
    autoplay: {
      enabled: true,
      speed: 5000,
      delay: 1000,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public smallSwiperConfig: any = {
    slidesPerView: 2,
    navigation: {
      enabled: true,
    },
    breakpoints: {
      1380: {
        slidesPerView: 4,
      },
    },
  };

  public debugLog(idx: number): void {
    // console.log(idx);
  }
}
