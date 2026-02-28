---
sidebar_position: 3
title: Quick Start
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricCube } from "isometric-react/isometric-cube";

# Quick Start

This example renders a single isometric cube inside the required `Isometric` container.

```tsx
import { Isometric } from "isometric-react/isometric";
import { IsometricCube } from "isometric-react/isometric-cube";
import "isometric-react/isometric.css";

export function App() {
  return (
    <Isometric>
      <IsometricCube size={{ width: 5, height: 5 }} depth={2}>
        <IsometricCube.Side side="top" />
        <IsometricCube.Side side="front-left" />
        <IsometricCube.Side side="front-right" />
        <IsometricCube.Side side="bottom" />
        <IsometricCube.Side side="back-left" />
        <IsometricCube.Side side="back-right" />
      </IsometricCube>
    </Isometric>
  );
}
```

## Rendered example

<RenderedExample>
  <Isometric>
    <IsometricCube size={{ width: 5, height: 5 }} depth={2}>
      <IsometricCube.Side side="top" />
      <IsometricCube.Side side="front-left" />
      <IsometricCube.Side side="front-right" />
      <IsometricCube.Side side="bottom" />
      <IsometricCube.Side side="back-left" />
      <IsometricCube.Side side="back-right" />
    </IsometricCube>
  </Isometric>
</RenderedExample>

## Notes

- `Isometric` sets up the parent perspective context for child components.
- `IsometricCube` requires both `size` (`{ width, height }`) and `depth`.
- Each `IsometricCube.Side` receives a `side` value:
  `"top"`, `"front-left"`, `"front-right"`, `"bottom"`, `"back-left"`, `"back-right"`.

Next step: continue with the [Components](../components/isometric.md) reference for full prop details.
