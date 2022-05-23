import { newSpecPage } from '@stencil/core/testing';
import { CustomInput } from './custom-input';

describe('custom-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CustomInput],
      html: '<custom-input></custom-input>',
    });
    expect(root).toEqualHtml(`
      <custom-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </custom-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CustomInput],
      html: `<custom-input first="Stencil" last="'Don't call me a framework' JS"></custom-input>`,
    });
    expect(root).toEqualHtml(`
      <custom-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </custom-input>
    `);
  });
});
