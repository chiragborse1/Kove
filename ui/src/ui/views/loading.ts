import { html } from "lit";
import { BRAND_NAME } from "../branding.ts";

export type LoadingViewProps = {
  statusMessage: string;
};

export function renderLoading(props: LoadingViewProps) {
  return html`
    <section class="desktop-loading" aria-live="polite">
      <div class="desktop-loading__card">
        <div class="desktop-loading__mark" aria-hidden="true">K</div>
        <div class="desktop-loading__eyebrow">${BRAND_NAME}</div>
        <h1 class="desktop-loading__title">Starting your AI team...</h1>
        <p class="desktop-loading__status">${props.statusMessage}</p>
        <div class="desktop-loading__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  `;
}
