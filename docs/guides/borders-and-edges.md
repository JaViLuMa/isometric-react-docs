---
sidebar_position: 2
title: Borders and Edges
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricCube } from "isometric-react/isometric-cube";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Borders and Edges

Use `border` and `edge` to add definition and depth to isometric surfaces.

## Type signatures

```ts
type Border = {
  size?: React.CSSProperties["borderWidth"];
  style?: React.CSSProperties["borderStyle"];
  color?: React.CSSProperties["borderColor"];
};

type Edge = {
  depth?: number | string;
  color?: string;
};
```

## Supported components

- `border`: [IsometricCube](../components/isometric-cube.md), [IsometricPlane](../components/isometric-plane.md)
- `edge`: [IsometricPlane](../components/isometric-plane.md) only

## Border example (cube)

```tsx
import { IsometricCube } from "isometric-react/isometric-cube";

export function CubeWithBorder() {
  return (
    <IsometricCube
      size={{ width: 5, height: 5 }}
      depth={5}
      border={{ size: 1, style: "solid", color: "green" }}
    >
      <IsometricCube.Side side="top">TOP</IsometricCube.Side>
      <IsometricCube.Side side="front-left">FRONT LEFT</IsometricCube.Side>
    </IsometricCube>
  );
}
```

### Rendered cube example

<RenderedExample>
  <Isometric>
    <IsometricCube
      size={{ width: 5, height: 5 }}
      depth={5}
      border={{ size: "2px", style: "solid", color: "green" }}
    >
      <IsometricCube.Side side="top">TOP</IsometricCube.Side>
      <IsometricCube.Side side="front-left">FRONT LEFT</IsometricCube.Side>
    </IsometricCube>
  </Isometric>
</RenderedExample>

## Border and edge example (plane)

```tsx
import { IsometricPlane } from "isometric-react/isometric-plane";

export function PlaneWithEdge() {
  return (
    <IsometricPlane
      size={{ width: 8, height: 8 }}
      border={{ size: "1px", style: "solid", color: "red" }}
    />
  );
}
```

### Rendered plane example

<RenderedExample>
  <Isometric>
    <IsometricPlane
      size={{ width: 8, height: 8 }}
      color="#4f8bff"
      border={{ size: "1px", style: "solid", color: "red" }}
    />
  </Isometric>
</RenderedExample>

## Border fields

| Field   | Type                                 | Description                                              |
| ------- | ------------------------------------ | -------------------------------------------------------- |
| `size`  | `React.CSSProperties["borderWidth"]` | Border width, for example `1`, `"1px"`, or `"0.125rem"`. |
| `style` | `React.CSSProperties["borderStyle"]` | Border style, for example `"solid"` or `"dashed"`.       |
| `color` | `React.CSSProperties["borderColor"]` | Border color value.                                      |

## Edge fields

| Field   | Type               | Description                                 |
| ------- | ------------------ | ------------------------------------------- |
| `depth` | `number \| string` | Visual depth of the edge extrusion.         |
| `color` | `string`           | Base color used to render the edge shading. |
