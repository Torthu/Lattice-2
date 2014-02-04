# Lattice SCSS Grid

Lattice 2 is a small and lightweight SCSS/CSS framework. The grid uses the float:left method of placing elements.

Lattice 2 uses either percentages, columns or fractions in order to determine element placements and sizes.

## The Grid
$amount and $gutter can be a percentage, a fraction or a column number.

### Mixins
col($amount, $gutter)
push($amount)
pull($amount)
offset($direction, $amount)
responsive-image()
vendor-prefix($name, $argument)

## Breakpoints (to make the grid responsive)

### Mixins
breakpoint($res (a resolution or a predetermined one), $type (min/max), $axis (width/height))

### Variables
A number of default resolutions, such as HD, SD, etcetera are included as variables.