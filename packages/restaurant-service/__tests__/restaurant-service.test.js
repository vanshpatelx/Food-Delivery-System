'use strict';

const restaurantService = require('..');
const assert = require('assert').strict;

assert.strictEqual(restaurantService(), 'Hello from restaurantService');
console.info('restaurantService tests passed');
