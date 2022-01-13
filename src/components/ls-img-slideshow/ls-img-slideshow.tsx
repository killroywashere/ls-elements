import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ls-img-slideshow',
  styleUrl: 'ls-img-slideshow.css',
  shadow: true,
})
export class LsImgSlideshow {

  render() {
    return (
        <div class={'container'}>Hello there. Lets create a slideshow</div>
    );
  }

}
