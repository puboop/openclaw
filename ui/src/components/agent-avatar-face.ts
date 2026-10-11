import { html, svg } from "lit";

/**
 * Neutral placeholder artwork: every agent fallback surface renders the same
 * plain white circle instead of the generated identicon face. The SVG shell
 * keeps `.identity-avatar__agent-face` sizing intact for CSS consumers.
 */
export function renderAgentAvatarFace(_agentId: string) {
  return html`<svg
    class="identity-avatar__agent-face"
    viewBox="0 0 32 32"
    width="100%"
    height="100%"
    aria-hidden="true"
  >
    ${svg`<circle cx="16" cy="16" r="16" fill="#ffffff" />`}
  </svg>`;
}
