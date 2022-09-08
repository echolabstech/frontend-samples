import { LitElement, html, css, PropertyValues, } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import { styleMap, } from 'lit/directives/style-map.js';

const logo = new URL('/assets/open-wc-logo.svg', import.meta.url).href;
const HEADER_BACKGROUND = '#fff';

@customElement('cnh-header')
export default class CnhHeader extends LitElement {
	@property({ type: String, attribute: 'background-color', })
	backgroundColor = HEADER_BACKGROUND;

	static styles = css`
		header {
			display: flex;
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

	// pre-update
	constructor() { // standard custom element
		super();
		console.log(this.renderRoot, this.shadowRoot);
	}

	hasChanged() {
		console.log(this.renderRoot, this.shadowRoot);
	}

	requestUpdate() {
		super.requestUpdate();
		console.log(this.renderRoot, this.shadowRoot);
	}

	// update
	attributeChangedCallback() { // standard custom element
		console.log(this.renderRoot, this.shadowRoot);
	}

	performUpdate() {
		super.performUpdate();
		console.log(this.renderRoot, this.shadowRoot);
		const navLinks = this.shadowRoot?.querySelector('slot');
		console.log(navLinks);
	}

	shouldUpdate() {
		console.log(this.renderRoot, this.shadowRoot);
		return true;
	}

	willUpdate(changed: PropertyValues<this>) {
  	changed.has('backgroundColor') &&
  	changed.backgroundColor ??
  	this.backgroundColor = HEADER_BACKGROUND;
	}

	update(changedProperties: PropertyValues) {
		super.update(changedProperties);
		console.log(this.renderRoot, this.shadowRoot);
	}

	render() {
		const headerStyles = styleMap({ 'background-color': this.backgroundColor, })
		return html`
			<header style=${headerStyles}>
				<span class="logo"><img alt="open-wc logo" src=${logo} /></span>
				<nav class="nav">
					<ol class="nav-list">
						<li class="nav-list_link">
							<a href="#">
								<slot name="nav-link-1">Link1</slot>
							</a>
						</li>
						<li class="nav-list_link">
							<a href="#">
								<slot name="nav-link-2">Link2</slot>
							</a>
						</li>
						<li class="nav-list_link">
							<a href="#">
								<slot name="nav-link-3">Link3</slot>
							</a>
						</li>
					</ol>
				</nav>
			</header>
		`;
	}

	// post-update
	connectedCallback() { // standard custom element
	  super.connectedCallback()
	  console.log(this.renderRoot, this.shadowRoot);
	}

	adoptedCallback () { // standard custom element
	  console.log(this.renderRoot, this.shadowRoot);	
	}

	disconnectedCallback() { // standard custom element
	  super.disconnectedCallback()
	  console.log(this.renderRoot, this.shadowRoot);
	}

	firstUpdated() {
		console.log(this.renderRoot, this.shadowRoot);
	}

	updated() {
		console.log(this.renderRoot, this.shadowRoot);
	}

	updatedComplete() {
		console.log(this.renderRoot, this.shadowRoot);
	}
}
