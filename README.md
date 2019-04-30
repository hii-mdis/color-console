# @mdis/color-console

Creates a new Node.js Console object that outputs messages in color and with a prefix.

## Installation

```bash
npm install --save @mdis/color-console
```

## Usage

```javascript
const console = require('@mdis/color-console')('server');

console.debug('This is a debug message.')
console.info('This is an info message.')
console.log('This is a log message.')
console.warn('This is a warning message.')
console.error('This is an error message.')
```

The output will be the following:

```
[DEBUG:server] This is a debug message.
[INFO:server] This is an info message.
[LOG:server] This is a log message.
[WARN:server] This is a warning message.
[ERROR:server] This is an error message.
```

## Colors

Each of the five console methods will output using the following colors:

- debug: blue
- info: green
- log: *default terminal color*
- warn: yellow
- error: red

## Additional Notes

1. The console object returned by calling the `@mdis/color-console` function is an actual Node.js Console object and has all of the advertised methods.
2. If the `@mdis/color-console` function is called with no argument, then the filename of the parent module is used as the prefix. If this is not desired, please pass an empty string to the function.

## License

MIT License

Copyright (c) 2019 Huntington Ingalls Industries

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
