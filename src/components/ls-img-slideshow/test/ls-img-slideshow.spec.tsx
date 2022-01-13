import { newSpecPage } from '@stencil/core/testing';
import { LsImgSlideshow } from '../ls-img-slideshow';

describe('ls-img-slideshow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LsImgSlideshow],
      html: `<ls-img-slideshow></ls-img-slideshow>`,
    });
    expect(page.root).toEqualHtml(`
      <ls-img-slideshow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ls-img-slideshow>
    `);
  });
});
