'use strict';

const proxy = require('..');
const assert = require('assert').strict;

assert.strictEqual(proxy(), 'Hello from proxy');
console.info('proxy tests passed');
