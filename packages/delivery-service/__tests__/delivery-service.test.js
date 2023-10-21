'use strict';

const deliveryService = require('..');
const assert = require('assert').strict;

assert.strictEqual(deliveryService(), 'Hello from deliveryService');
console.info('deliveryService tests passed');
