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
  it("renders the same neutral avatar for every agent", () => {
    const first = face("forge").outerHTML;
    face("scout");
    expect(face("scout").outerHTML).toBe(first);
    expect(face("forge").outerHTML).toBe(first);
  });

  it("fills the circular avatar with plain white artwork", () => {
    for (let index = 0; index < 32; index++) {
      const avatar = face(`agent-${index}`);
      expect(avatar.getAttribute("viewBox")).toBe("0 0 32 32");
      const background = avatar.firstElementChild!;
      expect(background.tagName).toBe("circle");
      expect(background.getAttribute("cx")).toBe("16");
      expect(background.getAttribute("cy")).toBe("16");
      expect(background.getAttribute("r")).toBe("16");
      expect(background.getAttribute("fill")).toBe("#ffffff");
      expect(avatar.querySelector("image, filter, foreignObject, use")).toBeNull();
    }
  });
});
