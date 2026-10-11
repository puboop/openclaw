/* @vitest-environment jsdom */
import { render } from "lit";
import { describe, expect, it } from "vitest";
import { renderAgentAvatarFace } from "./agent-avatar-face.ts";

function face(id: string) {
  const container = document.createElement("div");
  render(renderAgentAvatarFace(id), container);
  return container.querySelector("svg")!;
}

describe("default agent face", () => {
  it("renders the same customized avatar for every agent", () => {
    const first = face("forge").outerHTML;
    face("scout");
    expect(face("scout").outerHTML).toBe(first);
    expect(face("forge").outerHTML).toBe(first);
  });

  it("fills the circular avatar with the bundled image artwork", () => {
    for (let index = 0; index < 32; index++) {
      const avatar = face(`agent-${index}`);
      expect(avatar.getAttribute("viewBox")).toBe("0 0 32 32");
      const image = avatar.querySelector("image");
      expect(image).not.toBeNull();
      expect(image!.getAttribute("preserveAspectRatio")).toBe("xMidYMid slice");
      const href = image!.getAttribute("href") ?? image!.getAttribute("xlink:href") ?? "";
      expect(href).toMatch(/default-agent-avatar\.png|data:image\/png;base64,/);
    }
  });
});
