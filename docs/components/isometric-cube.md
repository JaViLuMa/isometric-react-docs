---
sidebar_position: 2
title: IsometricCube
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricCube } from "isometric-react/isometric-cube";

# IsometricCube

`IsometricCube` renders a cube using a required size and depth, with individual faces added through `IsometricCube.Side`.

## Import

```tsx
import { IsometricCube } from "isometric-react/isometric-cube";
```

## Props (`IsometricCube`)

| Prop              | Type                                | Required | Description                                        |
| ----------------- | ----------------------------------- | -------- | -------------------------------------------------- |
| `size`            | `{ width: number; height: number }` | Yes      | Base cube dimensions.                              |
| `depth`           | `number`                            | Yes      | Cube depth.                                        |
| `children`        | `React.ReactNode`                   | No       | Usually one or more `IsometricCube.Side` elements. |
| `as`              | `React.ElementType`                 | No       | Polymorphic element type.                          |
| `position`        | `Position`                          | No       | Offsets and elevation values.                      |
| `border`          | `Border`                            | No       | Border styling for rendered faces.                 |
| `shadow`          | `Shadow`                            | No       | Shadow distance and spacing settings.              |
| `shadowAnimation` | `ShadowAnimation`                   | No       | Animated shadow configuration.                     |
| `rotation`        | `Rotation`                          | No       | Rotation animation configuration.                  |

## Props (`IsometricCube.Side`)

| Prop       | Type                                                                                | Required | Description                     |
| ---------- | ----------------------------------------------------------------------------------- | -------- | ------------------------------- |
| `side`     | `"top" \| "front-left" \| "front-right" \| "bottom" \| "back-left" \| "back-right"` | Yes      | Which cube face to render.      |
| `children` | `React.ReactNode`                                                                   | Yes      | What to render inside the face. |

## Basic usage

```tsx
import { IsometricCube } from "isometric-react/isometric-cube";

export function BasicCube() {
  return (
    <IsometricCube size={{ width: 5, height: 5 }} depth={2}>
      <IsometricCube.Side side="top" />
      <IsometricCube.Side side="front-left" />
      <IsometricCube.Side side="front-right" />
      <IsometricCube.Side side="bottom" />
      <IsometricCube.Side side="back-left" />
      <IsometricCube.Side side="back-right" />
    </IsometricCube>
  );
}
```

### Rendered example

<RenderedExample>
  <Isometric>
    <IsometricCube size={{ width: 6, height: 6 }} depth={6} border={{ size: "1px", color: "red" }}>
      <IsometricCube.Side side="top" style={{ backgroundColor: "white", color: "black" }}>TOP</IsometricCube.Side>
      <IsometricCube.Side side="front-left" style={{ backgroundColor: "white", color: "black" }}>FRONT LEFT</IsometricCube.Side>
      <IsometricCube.Side side="front-right" style={{ backgroundColor: "white", color: "black" }}>FRONT RIGHT</IsometricCube.Side>
    </IsometricCube>
  </Isometric>
</RenderedExample>

## With optional props

```tsx
import { IsometricCube } from "isometric-react/isometric-cube";

export function StyledCube() {
  return (
    <IsometricCube
      size={{ width: 5, height: 5 }}
      depth={2}
      as="section"
      position={{ top: 2, left: 1, elevation: 1 }}
      border={{ size: 1, style: "solid", color: "#2f2f2f" }}
      shadow={{ distance: 2, spacingX: 1, spacingY: 1 }}
    >
      <IsometricCube.Side side="top" />
      <IsometricCube.Side side="front-left" />
      <IsometricCube.Side side="front-right" />
    </IsometricCube>
  );
}
```

## Supported shared props

- [Position](../guides/positioning.md)
- [Border](../guides/borders-and-edges.md)
- [Shadow](../guides/shadows.md)
- [ShadowAnimation](../guides/shadow-animations.md)
- [Rotation](../guides/rotation.md)
- [Polymorphic `as` prop](../guides/polymorphic-components.md)

`IsometricCube` does **not** support the `edge` prop.
