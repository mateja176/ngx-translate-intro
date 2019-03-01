import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslatePipe, DatePipe],
})
export class AppComponent implements OnInit {
  title: string;

  now = new Date();

  date = new BehaviorSubject<string>(new Date().toString());

  constructor(
    private translate: TranslateService,
    private translatePipe: TranslatePipe,
    private datePipe: DatePipe,
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.title = this.translatePipe.transform('title');

    this.date.next(this.datePipe.transform(this.date.value));
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  useLocale(locale: string) {
    this.date.next(this.datePipe.transform(new Date(), 'longDate', '', locale));
  }
}
