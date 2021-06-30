import { customElement, LitElement, html, property } from 'lit-element';

@customElement('x-button')
export class Button extends LitElement {
    @property() icon?: string;

    private secret = 'don\'t tell anyone';

    render() {
        return html`<button>Click me</button>`;
    }
}