<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# strided2array5d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a strided array to a five-dimensional nested array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-strided2array5d
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var strided2array5d = require( '@stdlib/array-base-strided2array5d' );
```

#### strided2array5d( x, shape, strides, offset )

Converts a strided array to a five-dimensional nested array.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var arr = strided2array5d( x, [ 1, 1, 1, 3, 2 ], [ 6, 6, 6, 2, 1 ], 0 );
// returns [ [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ] ]

arr = strided2array5d( x, [ 1, 1, 1, 3, 2 ], [ 1, 1, 1, 1, 3 ], 0 );
// returns [ [ [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ] ] ]
```

The function accepts the following arguments:

-   **x**: input array.
-   **shape**: array shape.
-   **strides**: dimension strides.
-   **offset**: index of the first indexed value in the input array.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that the input array is [compatible][@stdlib/ndarray/base/assert/is-buffer-length-compatible] with the specified array shape, dimension strides, and index offset.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array-base-zero-to' );
var numel = require( '@stdlib/ndarray-base-numel' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strided2array5d = require( '@stdlib/array-base-strided2array5d' );

var shape = [ 1, 1, 3, 3, 3 ];

var x = zeroTo( numel( shape ) );
console.log( x );

var y = strided2array5d( x, shape, shape2strides( shape, 'row-major' ), 0 );
console.log( y );

y = strided2array5d( x, shape, shape2strides( shape, 'column-major' ), 0 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-strided2array5d.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-strided2array5d

[test-image]: https://github.com/stdlib-js/array-base-strided2array5d/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-strided2array5d/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-strided2array5d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-strided2array5d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-strided2array5d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-strided2array5d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-strided2array5d/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-strided2array5d/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-strided2array5d/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-strided2array5d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-strided2array5d/main/LICENSE

[@stdlib/ndarray/base/assert/is-buffer-length-compatible]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible

</section>

<!-- /.links -->
