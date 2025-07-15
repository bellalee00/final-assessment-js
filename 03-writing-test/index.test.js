import { sum } from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('sum function', (t) => {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 should equal 3');
  assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should equal 0');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(5, 7), 12, '5 + 7 should equal 12');
});
