import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SetThemeService } from '../services/set-theme.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public selectedTheme: string;

  constructor(
    public navCtrl: NavController,
    private settings: SetThemeService
  ) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  public toggleAppTheme(): void {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

}
