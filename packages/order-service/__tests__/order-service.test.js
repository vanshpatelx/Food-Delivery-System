'use strict';

const orderService = require('..');
const assert = require('assert').strict;

assert.strictEqual(orderService(), 'Hello from orderService');
console.info('orderService tests passed');
