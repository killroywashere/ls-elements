import { newE2EPage } from '@stencil/core/testing';

describe('ls-img-slideshow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ls-img-slideshow></ls-img-slideshow>');

    const element = await page.find('ls-img-slideshow');
    expect(element).toHaveClass('hydrated');
  });
});
