import { customElement, LitElement, html } from "lit-element";
import "../../styles/styles.js";
import "../../common/hbr-layout/hbr-layout.js";

@customElement("hbr-layout-demo")
class HarborLayoutDemo extends LitElement {
  render() {
    return html`
      <style>
        :host {

        }
      </style>
      
      Harbor Layout Demo
      <hbr-layout></hbr-layout>

    `;
  }
}
