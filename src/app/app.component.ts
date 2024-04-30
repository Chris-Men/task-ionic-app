import { ThemeService } from 'src/app/services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private ThemeSvc: ThemeService,
  ) {
    this.ThemeSvc.setInitialTheme()
  }
}
