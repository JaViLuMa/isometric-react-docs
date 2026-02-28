---
sidebar_position: 3
title: IsometricPlane
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# IsometricPlane

`IsometricPlane` renders a flat isometric surface. It is useful for floors, platforms, and layered scenes.

## Import

```tsx
import { IsometricPlane } from "isometric-react/isometric-plane";
```

## Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `size` | `{ width: number; height: number }` | Yes | Plane dimensions. |
| `color` | `string` | No | Plane color override. |
| `as` | `React.ElementType` | No | Polymorphic element type. |
| `position` | `Position` | No | Offsets and elevation values. |
| `border` | `Border` | No | Border styling around the plane. |
| `edge` | `Edge` | No | Edge depth and edge color settings. |
| `shadow` | `Shadow` | No | Shadow distance and spacing settings. |
| `shadowAnimation` | `ShadowAnimation` | No | Animated shadow configuration. |
| `rotation` | `Rotation` | No | Rotation animation configuration. |

## Basic usage

```tsx
import { IsometricPlane } from "isometric-react/isometric-plane";

export function BasicPlane() {
  return <IsometricPlane size={{ width: 8, height: 8 }} />;
}
```

### Rendered example

<RenderedExample>
  <Isometric>
    <IsometricPlane
      size={{ width: 8, height: 8 }}
      color="#5f92ff"
      edge={{ depth: 2, color: "#3553a5" }}
    />
  </Isometric>
</RenderedExample>

## With optional props

```tsx
import { IsometricPlane } from "isometric-react/isometric-plane";

export function StyledPlane() {
  return (
    <IsometricPlane
      size={{ width: 8, height: 8 }}
      color="#4f8bff"
      as="section"
      position={{ top: 1, left: 2, elevation: 1 }}
      border={{ size: 1, style: "solid", color: "#1f2a44" }}
      edge={{ depth: 2, color: "#2c4ea3" }}
      shadow={{ distance: 2, spacingX: 1, spacingY: 1 }}
    />
  );
}
```

## Supported shared props

- [Position](../guides/positioning.md)
- [Border and Edge](../guides/borders-and-edges.md)
- [Shadow](../guides/shadows.md)
- [ShadowAnimation](../guides/shadow-animations.md)
- [Rotation](../guides/rotation.md)
- [Polymorphic `as` prop](../guides/polymorphic-components.md)
