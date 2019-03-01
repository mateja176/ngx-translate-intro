import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslatePipe],
})
export class AppComponent {
  title = this.translatePipe.transform('title');

  constructor(
    private translate: TranslateService,
    private translatePipe: TranslatePipe,
  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
