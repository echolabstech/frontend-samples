import { LitElement, html, css, } from 'lit';

const logo = new URL('/assets/open-wc-logo.svg', import.meta.url).href;

export default class CnhHeader extends LitElement {
	static styles = css`
		header {
			display: flex;
			background-color: #fff;
		}

		.logo {
			width: 10%;
		}

		.logo img {
			width: 100%;
		}
	`;

	render() {
		return html`
			<header>
				<span class="logo"><img alt="open-wc logo" src=${logo} /></span>
			</header>
		`;
	}
}
customElements.define('cnh-header', CnhHeader);