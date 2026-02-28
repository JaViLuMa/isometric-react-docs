---
sidebar_position: 3
title: Shadows
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Shadows

Use `shadow` to add depth cues by projecting a shadow from the component.

## Type signature

```ts
type Shadow = {
  distance: number | string;
  spacingX: number;
  spacingY: number;
};
```

## Supported components

- [IsometricCube](../components/isometric-cube.md)
- [IsometricPlane](../components/isometric-plane.md)
- [IsometricGrid](../components/isometric-grid.md)

## Example

```tsx
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";
import "isometric-react/isometric.css";

export function PlaneShadow() {
  return (
    <Isometric>
      <IsometricPlane
        size={{ width: 8, height: 8 }}
        color="#4f8bff"
        shadow={{ distance: 3, spacingX: 1, spacingY: 1 }}
      />
    </Isometric>
  );
}
```

### Rendered example

<RenderedExample>
  <Isometric>
    <IsometricPlane
      size={{ width: 8, height: 8 }}
      color="#4f8bff"
      edge={{ depth: 2, color: "#2c4ea3" }}
      shadow={{ distance: 2, spacingX: 1, spacingY: 1 }}
    />
  </Isometric>
</RenderedExample>

## Fields

| Field      | Type               | Description                                      |
| ---------- | ------------------ | ------------------------------------------------ |
| `distance` | `number \| string` | How far the shadow is projected from the object. |
| `spacingX` | `number`           | Horizontal shadow direction multiplier.          |
| `spacingY` | `number`           | Vertical shadow direction multiplier.            |

Increase `distance` for softer, farther shadows. Use `spacingX` and `spacingY` to control direction.
