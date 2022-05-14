import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Subscription} from 'rxjs';
import {AppConfig} from '../api/appconfig';
import {ConfigService} from '../service/app.config.service';
import {AppMainComponent} from '../main/app.main.component';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-config',
  templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit, OnDestroy {

  scale: number = 14;

  scales: any[] = [12, 13, 14, 15, 16];

  config: AppConfig;

  subscription?: Subscription;

  constructor(public app: AppComponent, public appMain: AppMainComponent, public configService: ConfigService, public primengConfig: PrimeNGConfig) {
    this.config = this.configService.config;
  }

  ngOnInit() {
    this.subscription = this.configService.configUpdate$.subscribe((config: AppConfig) => {
      this.config = config;
      this.scale = 14;

      this.applyScale();
    });
  }

  onConfigButtonClick(event: Event) {
    this.appMain.configActive = !this.appMain.configActive;
    this.appMain.configClick = true;
    event.preventDefault();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  onRippleChange(ripple: HTMLInputElement) {
    const checked: boolean = ripple.checked;
    this.primengConfig.ripple = checked;
    this.configService.updateConfig({...this.config, ...{ripple: checked}});
  }

  onInputStyleChange() {
    if (!this.config) {
      throw new Error('App config is undefined');
    }
    this.configService.updateConfig(this.config);
  }

  changeTheme(theme: string, dark: boolean) {
    let themeElement = document.getElementById('theme-css');
    if (!themeElement) {
      throw new Error("Element with id: theme-css doesn't exist");
    }
    themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
    this.configService.updateConfig({...this.config, ...{theme, dark}});
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
