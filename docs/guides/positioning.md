---
sidebar_position: 1
title: Positioning
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Positioning

Use the `position` prop to offset a component on the isometric plane and control its elevation.

## Type signature

```ts
type Position = {
  top?: number | string;
  left?: number | string;
  elevation?: number | string;
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

export function PositionedPlane() {
  return (
    <Isometric>
      <IsometricPlane
        size={{ width: 8, height: 8 }}
        color="#4f8bff"
        position={{ top: 2, left: -1, elevation: 1 }}
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
      position={{ top: 2, left: -1, elevation: 1 }}
    />
  </Isometric>
</RenderedExample>

## Fields

| Field | Type | Description |
| --- | --- | --- |
| `top` | `number \| string` | Vertical offset on the isometric plane. |
| `left` | `number \| string` | Horizontal offset on the isometric plane. |
| `elevation` | `number \| string` | Elevates or lowers the element on the Z axis. |

Numeric values use the library defaults. String values let you provide explicit CSS units like `"2rem"` or `"16px"`.
