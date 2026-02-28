---
sidebar_position: 4
title: Shadow Animations
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Shadow Animations

Use `shadowAnimation` to animate shadow distance and create movement effects like hovering.

## Type signature

```ts
type ShadowAnimation = {
  from: number | string;
  to: number | string;
  spacingX: number;
  spacingY: number;
  delay?: number;
  duration?: number;
  options?: string;
};
```

## Supported components

- [IsometricCube](../components/isometric-cube.md)
- [IsometricPlane](../components/isometric-plane.md)
- [IsometricGrid](../components/isometric-grid.md)

## Example

```tsx
import { IsometricPlane } from "isometric-react/isometric-plane";

export function AnimatedCubeShadow() {
  return (
    <IsometricPlane
      size={{ width: 5, height: 5 }}
      color: "cyan"
      shadowAnimation={{
        from: 1,
        to: 4,
        spacingX: 1,
        spacingY: 1,
        duration: 1.5,
        options: "alternate infinite",
      }}
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
      shadowAnimation={{
        from: 1,
        to: 4,
        spacingX: 1,
        spacingY: 1,
        duration: 1.5,
        options: "alternate infinite"
      }}
    />
  </Isometric>
</RenderedExample>

## Fields

| Field      | Type               | Description                                                           |
| ---------- | ------------------ | --------------------------------------------------------------------- |
| `from`     | `number \| string` | Starting shadow distance.                                             |
| `to`       | `number \| string` | Ending shadow distance.                                               |
| `spacingX` | `number`           | Horizontal shadow direction multiplier.                               |
| `spacingY` | `number`           | Vertical shadow direction multiplier.                                 |
| `delay`    | `number`           | Delay before animation starts (seconds).                              |
| `duration` | `number`           | Animation duration (seconds).                                         |
| `options`  | `string`           | Additional CSS animation options, for example `"alternate infinite"`. |
