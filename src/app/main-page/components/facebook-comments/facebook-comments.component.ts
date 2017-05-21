import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tpw-facebook-comments',
  templateUrl: './facebook-comments.component.html',
  styleUrls: ['./facebook-comments.component.scss']
})
export class FacebookCommentsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initialize(document, 'script', 'facebook-jssdk', params['language']);
    });
  }

  public initialize(d, s: string, id: string, language: 'pl' | 'lt' | 'en') {
    let js;
    const fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement(s);
    js.id = id;
    js.src = `//connect.facebook.net/${this.getLanguageCode(language)}/sdk.js#xfbml=1&version=v2.8&appId=1228964870524801`;

    fjs.parentNode.insertBefore(js, fjs);
  }

  private getLanguageCode(language: 'pl' | 'lt' | 'en') {
    const codes = {
      pl: 'pl_PL',
      lt: 'lt_LT',
      en: 'en_EN'
    };

    return codes[language];
  }
}
