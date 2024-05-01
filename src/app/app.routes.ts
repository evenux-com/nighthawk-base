import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NighthawkRouteSwitchGuard } from '@evenux.com/nighthawk-angular-devkit';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { SelectComponent } from './pages/select/select.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ChecksComponent } from './pages/checks/checks.component';
import { RangesComponent } from './pages/ranges/ranges.component';
import { SwiperComponent } from './pages/swiper/swiper.component';
import { DialogsComponent } from './pages/dialogs/dialogs.component';
import { DropdownsComponent } from './pages/dropdowns/dropdowns.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'select',
    component: SelectComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'forms',
    component: FormsComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'checks',
    component: ChecksComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'ranges',
    component: RangesComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'swiper',
    component: SwiperComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'dialogs',
    component: DialogsComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canDeactivate: [NighthawkRouteSwitchGuard],
  },
];
