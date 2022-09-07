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

		.nav {
			width: 90%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		.nav-list {
			width: 50%;
			display: flex;
			justify-content: space-evenly;
		}

		.nav-list_link {
			display: inline-block;
		}
	`;

	render() {
		return html`
			<header>
				<span class="logo"><img alt="open-wc logo" src=${logo} /></span>
				<nav class="nav">
					<ol class="nav-list">
						<li class="nav-list_link"><a href="#">About</a></li>
						<li class="nav-list_link"><a href="#">Products</a></li>
						<li class="nav-list_link"><a href="#">Contact</a></li>
					</ol>
				</nav>
			</header>
		`;
	}
}
customElements.define('cnh-header', CnhHeader);