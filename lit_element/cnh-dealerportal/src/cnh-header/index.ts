import { LitElement, html, } from 'lit';

export default class CnhHeader extends LitElement {
	render() {
		return html`
			<header>this is the header</header>
		`
	}
}
customElements.define('cnh-header', CnhHeader);