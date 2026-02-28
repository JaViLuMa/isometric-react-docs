---
sidebar_position: 1
title: Isometric
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Isometric

`Isometric` is the root container that provides the isometric context for child components.

## Import

```tsx
import { Isometric } from "isometric-react/isometric";
```

## Props

| Prop       | Type                | Required | Description                                      |
| ---------- | ------------------- | -------- | ------------------------------------------------ |
| `children` | `React.ReactNode`   | Yes      | Content rendered inside the isometric container. |
| `as`       | `React.ElementType` | No       | Polymorphic element type. Defaults to `div`.     |

`Isometric` is polymorphic, so you can pass regular props for the selected `as` element (for example `className`, `id`, and `data-*` attributes).

## Example

```tsx
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";
import "isometric-react/isometric.css";

export function Example() {
  return (
    <Isometric>
      <IsometricPlane size={{ width: 6, height: 6 }} />
    </Isometric>
  );
}
```

### Rendered example

<RenderedExample>
  <Isometric>
    <IsometricPlane
      size={{ width: 6, height: 6 }}
      color="#4f8bff"
      edge={{ depth: 2, color: "#2c4ea3" }}
    />
  </Isometric>
</RenderedExample>

## Supported shared props

- Supports only the polymorphic [`as` prop](../guides/polymorphic-components.md).
- Does not support positioning, border/edge, shadow, or animation props directly.
