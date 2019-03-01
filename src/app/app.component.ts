import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslatePipe],
})
export class AppComponent implements OnInit {
  title: string;

  constructor(
    private translate: TranslateService,
    private translatePipe: TranslatePipe,
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.title = this.translatePipe.transform('title');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
