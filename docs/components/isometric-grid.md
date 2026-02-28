---
sidebar_position: 4
title: IsometricGrid
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricGrid } from "isometric-react/isometric-grid";

# IsometricGrid

`IsometricGrid` renders a configurable isometric grid. It is useful for scene alignment, level layouts, and visual guides.

## Import

```tsx
import { IsometricGrid } from "isometric-react/isometric-grid";
```

## Props

| Prop              | Type                | Required | Description                                   |
| ----------------- | ------------------- | -------- | --------------------------------------------- |
| `size`            | `number \| string`  | Yes      | Base grid size value.                         |
| `sizeMultiplier`  | `SizeMultiplier`    | No       | Multiplier applied to grid size calculations. |
| `color`           | `string`            | No       | Grid line color override.                     |
| `lineweight`      | `number`            | No       | Thickness of grid lines.                      |
| `as`              | `React.ElementType` | No       | Polymorphic element type.                     |
| `position`        | `Position`          | No       | Offsets and elevation values.                 |
| `shadow`          | `Shadow`            | No       | Shadow distance and spacing settings.         |
| `shadowAnimation` | `ShadowAnimation`   | No       | Animated shadow configuration.                |
| `rotation`        | `Rotation`          | No       | Rotation animation configuration.             |

## Basic usage

```tsx
import { IsometricGrid } from "isometric-react/isometric-grid";

export function BasicGrid() {
  return <IsometricGrid size={10} />;
}
```

### Rendered example

<RenderedExample>
  <Isometric>
    <IsometricGrid size={3} sizeMultiplier={{ width: 5, height: 4 }} color="#7a88a0" lineweight={1.2} />
  </Isometric>
</RenderedExample>

## With optional props

```tsx
import { IsometricGrid } from "isometric-react/isometric-grid";

export function StyledGrid() {
  return (
    <IsometricGrid
      size={10}
      sizeMultiplier={1}
      color="#6f7f92"
      lineweight={1}
      as="section"
      position={{ top: 0, left: 0, elevation: 0 }}
      shadow={{ distance: 1, spacingX: 1, spacingY: 1 }}
    />
  );
}
```

## Supported shared props

- [Position](../guides/positioning.md)
- [Shadow](../guides/shadows.md)
- [ShadowAnimation](../guides/shadow-animations.md)
- [Rotation](../guides/rotation.md)
- [Polymorphic `as` prop](../guides/polymorphic-components.md)

`IsometricGrid` does **not** support `border` or `edge`.
