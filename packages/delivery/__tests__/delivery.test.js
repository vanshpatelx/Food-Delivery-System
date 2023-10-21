'use strict';

const delivery = require('..');
const assert = require('assert').strict;

assert.strictEqual(delivery(), 'Hello from delivery');
console.info('delivery tests passed');
