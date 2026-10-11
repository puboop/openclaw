import { html, svg } from "lit";
import defaultAvatarPng from "../assets/default-agent-avatar.png";

/**
 * Customized default agent artwork: every fallback surface renders the same
 * bundled image instead of the generated identicon face. The image rides in
 * an SVG shell so existing `.identity-avatar__agent-face` sizing keeps
 * applying and the slot stays vector-shaped for CSS consumers.
 */
export function renderAgentAvatarFace(_agentId: string) {
  return html`<svg
    class="identity-avatar__agent-face"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    aria-hidden="true"
  >
    ${svg`<image
      href=${defaultAvatarPng}
      x="0"
      y="0"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid slice"
    />`}
  </svg>`;
}
