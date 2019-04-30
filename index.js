const { Console } = require('console');
const stream = require('stream');
const path = require('path');
const chalk = require('chalk');

const LEVELS = ['DEBUG', 'INFO', 'LOG', 'WARN', 'ERROR'];
const COLORS = ['blue', 'green', '<none>', 'yellow', 'red'];

const re = new RegExp(/^(\s*)@([0-4]) /); // handle space prefix for groups

class ColorConsoleStream extends stream.Writable {
  constructor(name) {
    super();
    if (typeof name === 'undefined' && module.parent !== null) {
      const filename = module.parent.filename;
      this.name = path.basename(filename, path.extname(filename));
    } else {
      this.name = name;
    }
  }
  write(message) {
    const match = re.exec(message);
    if (match) {
      const level = parseInt(match[2], 10);
      const output = level < 3 ? process.stdout : process.stderr;
      const spaces = match[1];
      const prefix = `[${LEVELS[level]}${this.name ? ':' + this.name : ''}]`;
      const string = message.substr(match[0].length);
      if (level === 2) {
        output.write(`${spaces}${prefix} ${string}`);
      } else {
        const color = COLORS[level];
        output.write(chalk[color](`${spaces}${prefix} ${string}`));
      }
    } else {
      process.stdout.write(message);
    }
  }
}

class ColorConsole extends Console {
  constructor(name) {
    const output = new ColorConsoleStream(name);
    super({ stdout: output, stderr: output });
  }
  debug() {
    super.debug.apply(this, ['@0', ...arguments]);
  }
  info() {
    super.info.apply(this, ['@1', ...arguments]);
  }
  log() {
    super.log.apply(this, ['@2', ...arguments]);
  }
  warn() {
    super.warn.apply(this, ['@3', ...arguments]);
  }
  error() {
    super.error.apply(this, ['@4', ...arguments]);
  }
}

function createColorConsole(name) {
  return new ColorConsole(name);
}

module.exports = createColorConsole;
