import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  images = Array.from(Array(15), (x, i) => i);

  masonryImages = [
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/16.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/1.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/1.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/2.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/3.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/2.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/4.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/3.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/5.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/4.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/6.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/5.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/7.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/6.jpg' },
    { image: 'https://material-components-web.appspot.com/images/photos/3x2/7.jpg' },
  ];
}
