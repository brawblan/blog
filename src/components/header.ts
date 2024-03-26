import { LitElement, css, html } from 'lit';

export class BDevHeader extends LitElement {
  static styles = [
    css`
      :host,
      header {
        width: 100%;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      header p {
        font-size: 2rem;
        margin: 0;
        font-weight: bold;
      }
      wired-card {
        width: 97%;
      }

      ul,
      ul li {
        margin: 0;
        padding: 0;
        text-indent: 0;
        list-style-type: none;
        list-style: none;
      }
      ul {
        display: flex;
        gap: 0.5rem;
      }
    `
  ];

  render() {
    return html`
      <wired-card class="header" elevation="2">
        <header>
          <p>Brandon's Blog</p>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <wired-button>
                    Home
                  </wired-button>
                </a>
              </li>
              <li>
                <wired-combo selected="blog-one" id="combo">
                  <wired-item value="blog-one">Blog One</wired-item>
                  <wired-item value="blog-two">Blog Two</wired-item>
                </wired-combo>
              </li>
            </ul>
          </nav>
        </header>
      </wired-card>
    `;
  }
}

customElements.get('bdev-header') || customElements.define('bdev-header', BDevHeader);
