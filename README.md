Lattice 2
=========

Lattice 2 is a small and lightweight SCSS/CSS framework.

You can use Lattice either as a pure SCSS mixin framework, or you can tell it to generate classes to be used directly in the HTML.


## Usage
Lattice 2 uses percentages to determine column widths. It uses fractions and integers to determine width: .col-1-3 equals "one third" and .col-2-5 equals "two fifths". In the same manner @include col(1,2); indicates that you want the element to be a "one half width" column. It uses padding to create spacing between content.

### Usage within SCSS
```scss
.something {
	@include col(1,2);
}
```

will generate

```css
.something {
  width: 50%;
  padding: 50px;
  float: left;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; 
}
```

### Usage as classes
The following code creates a column that is 33.3333% wide.

```html
<div class="col-1-3"></div>
```
