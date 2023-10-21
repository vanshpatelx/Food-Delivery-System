'use strict';

const userService = require('..');
const assert = require('assert').strict;

assert.strictEqual(userService(), 'Hello from userService');
console.info('userService tests passed');
