'use strict';

const restaurant = require('..');
const assert = require('assert').strict;

assert.strictEqual(restaurant(), 'Hello from restaurant');
console.info('restaurant tests passed');
