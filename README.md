Lattice 2
=========

Lattice 2 is a small and lightweight SCSS/CSS framework.

You can use Lattice either as a pure SCSS mixin framework, or you can tell it to generate classes to be used directly in the HTML.

## The Grid
The grid in Lattice 2 uses fractions to determine width. These fractions are available both as mixins and as classes.

For instance if you want a 33.3% wide column you could use either:

``` SCSS
.classname {
	@include col(1,3);
}
```

which will generate the following CSS:

```css
.something {
	width: 33.3%;
	padding: 50px;
	float: left;
	-webkit-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
}
```

or

``` HTML
<div class="col-1-3"></div>
```

with the corresponding CSS:

``` CSS
.col-1-3 {
	width: 33.3%;
	padding: 50px;
	float: left;
	-webkit-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
}

In both cases padding will be used for gutters.
