---
sidebar_position: 7
title: CSS Variables
---

# CSS Variables

`isometric-react` is driven by CSS custom properties. You can override these variables in your own styles to customize visuals globally or per component.

## How to override variables

```css
.my-scene .isometric-plane {
  --isometric-plane-color: #4f8bff;
  --isometric-border-color: #1f2a44;
  --isometric-border-size: 1px;
}
```

## Variable reference

### Cube

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-cube-width` | `0rem` | Cube width. |
| `--isometric-cube-height` | `0rem` | Cube height. |
| `--isometric-cube-depth` | `0rem` | Cube depth. |
| `--isometric-border-size-cube` | `0px` | Cube face border size. |
| `--isometric-border-style-cube` | `solid` | Cube face border style. |
| `--isometric-border-color-cube` | `#fff` | Cube face border color base. |

### Plane

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-plane-width` | `0rem` | Plane width. |
| `--isometric-plane-height` | `0rem` | Plane height. |
| `--isometric-plane-color` | `#000000` | Plane fill color. |

### Grid

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-grid-size` | `1rem` | Base grid cell size. |
| `--isometric-grid-width` | `1` | Grid width multiplier. |
| `--isometric-grid-height` | `1` | Grid height multiplier. |
| `--isometric-grid-color` | `#000` | Grid line color. |
| `--isometric-grid-lineweight` | `1%` | Grid line thickness. |

### Border and edge helpers

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-border-size` | `0px` | Border size for generic bordered elements. |
| `--isometric-border-style` | `solid` | Border style for generic bordered elements. |
| `--isometric-border-color` | `#000000` | Border color for generic bordered elements. |
| `--isometric-edge-color` | `#fff` | Edge color base. |
| `--isometric-edge-depth` | `0px` | Edge extrusion depth. |

### Position

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-position-top` | `0rem` | Top offset. |
| `--isometric-position-left` | `0rem` | Left offset. |
| `--isometric-position-elevation` | `0rem` | Elevation offset. |

### Rotation

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-rotate-from` | `0deg` | Initial rotation value on the element. |
| `--isometric-rotation-duration` | `1s` | Rotation animation duration. |
| `--isometric-rotation-delay` | `0s` | Rotation animation delay. |
| `--rotation-from` | `0deg` | Keyframe start value. |
| `--rotation-to` | `360deg` | Keyframe end value. |

### Shadow

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-shadow-distance` | `0` | Shadow distance for opacity falloff math. |
| `--isometric-shadow-distance-with-unit` | `1rem` | Shadow distance with unit for transforms. |
| `--isometric-shadow-spacing-x` | `0` | Shadow X direction multiplier. |
| `--isometric-shadow-spacing-y` | `0` | Shadow Y direction multiplier. |

### Shadow animation

| Variable | Default | Purpose |
| --- | --- | --- |
| `--isometric-shadow-animation-from` | `0` | Animation start distance. |
| `--isometric-shadow-animation-to` | `0` | Animation end distance. |
| `--isometric-shadow-animation-from-with-unit` | `0rem` | Start distance with unit for transforms. |
| `--isometric-shadow-animation-to-with-unit` | `0rem` | End distance with unit for transforms. |
| `--isometric-shadow-animation-duration` | `1s` | Shadow animation duration. |
| `--isometric-shadow-animation-delay` | `0s` | Shadow animation delay. |
| `--isometric-shadow-animation-options` | _(none)_ | Extra animation options, for example `alternate infinite`. |
| `--isometric-shadow-spacing-x` | `0` | Shared X direction multiplier used by animation transforms. |
| `--isometric-shadow-spacing-y` | `0` | Shared Y direction multiplier used by animation transforms. |
