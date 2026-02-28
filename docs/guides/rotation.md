---
sidebar_position: 5
title: Rotation
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Rotation

Use `rotation` to animate a component around the Z axis.

## Type signature

```ts
type Rotation = {
  from: number | string;
  to: number | string;
  delay?: number;
  duration?: number;
};
```

## Supported components

- [IsometricCube](../components/isometric-cube.md)
- [IsometricPlane](../components/isometric-plane.md)
- [IsometricGrid](../components/isometric-grid.md)

## Example

```tsx
import { IsometricPlane } from "isometric-react/isometric-plane";

export function RotatingCube() {
  return (
    <IsometricPlane
      size={{ width: 5, height: 5 }}
      color="cyan"
      rotation={{ from: 0, to: 360, duration: 4 }}
    />
  );
}
```

### Rendered example

<RenderedExample>
  <Isometric>
    <IsometricPlane
      size={{ width: 5, height: 5 }}
      color="cyan"
      rotation={{ from: 0, to: 360, duration: 4 }}
    />
  </Isometric>
</RenderedExample>

## Fields

| Field      | Type               | Description                              |
| ---------- | ------------------ | ---------------------------------------- |
| `from`     | `number \| string` | Initial rotation value.                  |
| `to`       | `number \| string` | Final rotation value.                    |
| `delay`    | `number`           | Delay before animation starts (seconds). |
| `duration` | `number`           | Animation duration (seconds).            |
