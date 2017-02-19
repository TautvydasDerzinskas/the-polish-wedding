import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-facebook-comments',
  templateUrl: './facebook-comments.component.html',
  styleUrls: ['./facebook-comments.component.scss']
})
export class FacebookCommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initialize(document, 'script', 'facebook-jssdk');
  }

  public initialize(d, s, id) {
    let js;
    const fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/lt_LT/sdk.js#xfbml=1&version=v2.8&appId=1228964870524801';

    fjs.parentNode.insertBefore(js, fjs);
  }

}
