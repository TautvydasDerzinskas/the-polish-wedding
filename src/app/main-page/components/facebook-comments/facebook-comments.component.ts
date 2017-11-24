import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TLanguageCodes, ELanguages } from './facebook-comments.enum';

import { WindowService } from '../../../shared/services/window/window.service';

@Component({
  selector: 'tpw-facebook-comments',
  templateUrl: './facebook-comments.component.html',
  styleUrls: ['./facebook-comments.component.scss']
})
export class FacebookCommentsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private windowService: WindowService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initialize(this.windowService.nativeWindow.document, 'script', 'facebook-jssdk', params['language']);
    });
  }

  ngOnDestroy() {
    delete this.windowService.nativeWindow.FB;
  }

  public initialize(d, s: string, id: string, language: TLanguageCodes) {
    let js;
    const fjs = d.getElementsByTagName(s)[0];

    js = d.createElement(s);
    js.id = id;
    js.src = `//connect.facebook.net/${this.getLanguageCode(language)}/sdk.js#xfbml=1&version=v2.8&appId=1228964870524801`;

    fjs.parentNode.insertBefore(js, fjs);
  }

  private getLanguageCode(language: TLanguageCodes) {
    const codes = {
      pl: ELanguages.pl,
      lt: ELanguages.lt,
      en: ELanguages.en
    };

    return codes[language];
  }
}
