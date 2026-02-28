---
sidebar_position: 6
title: Polymorphic Components
---

import RenderedExample from "@site/src/components/RenderedExample";
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

# Polymorphic Components

All public components support an `as` prop so you can change the rendered HTML element while keeping typed props.

## Type signature

```ts
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PolymorphicProps<C extends React.ElementType, P> = P &
  AsProp<C> &
  Omit<React.ComponentPropsWithRef<C>, keyof (AsProp<C> & P)>;
```

In practice, you usually only need:

```ts
type CommonPolymorphicProp = {
  as?: React.ElementType;
};
```

## Supported components

- [Isometric](../components/isometric.md)
- [IsometricCube](../components/isometric-cube.md)
- `IsometricCube.Side`
- [IsometricPlane](../components/isometric-plane.md)
- [IsometricGrid](../components/isometric-grid.md)

## Example

```tsx
import { Isometric } from "isometric-react/isometric";
import { IsometricPlane } from "isometric-react/isometric-plane";

export function PolymorphicExample() {
  return (
    <Isometric as="main" aria-label="isometric scene">
      <IsometricPlane
        as="section"
        id="hero-plane"
        size={{ width: 8, height: 8 }}
        color="#4f8bff"
      />
    </Isometric>
  );
}
```

### Rendered example

<RenderedExample>
  <Isometric as="main" aria-label="isometric scene">
    <IsometricPlane
      as="section"
      id="hero-plane"
      size={{ width: 8, height: 8 }}
      color="#4f8bff"
      edge={{ depth: 2, color: "#2c4ea3" }}
    />
  </Isometric>
</RenderedExample>

## Notes

- The chosen `as` element controls which native props are available (for example `href` for links or `type` for buttons).
- Component-specific props such as `size`, `depth`, or `position` still work the same.
