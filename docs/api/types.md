---
sidebar_position: 1
title: Types
---

# Types

This page lists the core TypeScript types used across `isometric-react`.

## Geometry and layout

### `SizeAsObject`

```ts
type SizeAsObject = {
  width: string | number;
  height: string | number;
};
```

Used by `IsometricCube` and `IsometricPlane`.

### `Position`

```ts
type Position = {
  top?: number | string;
  left?: number | string;
  elevation?: number | string;
};
```

Used by `IsometricCube`, `IsometricPlane`, and `IsometricGrid`.

### `SizeMultiplier`

```ts
type SizeMultiplier = {
  width?: number;
  height?: number;
};
```

Used by `IsometricGrid`.

## Surface and depth styling

### `Border`

```ts
type Border = {
  size?: React.CSSProperties["borderWidth"];
  style?: React.CSSProperties["borderStyle"];
  color?: React.CSSProperties["borderColor"];
};
```

Used by `IsometricCube` and `IsometricPlane`.

### `Edge`

```ts
type Edge = {
  depth?: string | number;
  color?: string;
};
```

Used by `IsometricPlane`.

## Shadows and animation

### `Shadow`

```ts
type Shadow = {
  distance: number | string;
  spacingX: number;
  spacingY: number;
};
```

Used by `IsometricCube`, `IsometricPlane`, and `IsometricGrid`.

### `ShadowAnimation`

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

Used by `IsometricCube`, `IsometricPlane`, and `IsometricGrid`.

### `Rotation`

```ts
type Rotation = {
  from: number | string;
  to: number | string;
  delay?: number;
  duration?: number;
};
```

Used by `IsometricCube`, `IsometricPlane`, and `IsometricGrid`.

## Polymorphism and cube faces

### `PolymorphicProps`

```ts
import type { ComponentPropsWithRef, ElementType } from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicProps<C extends ElementType, P = {}> = P &
  AsProp<C> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, P>>;
```

Used by all public components to support the `as` prop.

### `CubeSides`

```ts
type CubeSides =
  | "top"
  | "front-left"
  | "front-right"
  | "bottom"
  | "back-left"
  | "back-right";
```

Used by `IsometricCube.Side`.
