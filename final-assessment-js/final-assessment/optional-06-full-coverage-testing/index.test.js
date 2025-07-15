// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum with positive numbers', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 5), 15);
});

test('sum with zero', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum with negative numbers', () => {
  assert.strictEqual(sum(-1, -1), 0);
  assert.strictEqual(sum(1, -1), 0);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(-10, 5), 0);
});

test('sum with non-numeric values', () => {
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum(null, null), 0);
});

// Perbaiki pengujian NaN
test('sum with NaN', () => {
  // NaN input handling
  assert.strictEqual(isNaN(sum(NaN, 5)), true); // Memastikan hasil adalah NaN
  assert.strictEqual(isNaN(sum(5, NaN)), true); // Memastikan hasil adalah NaN
  assert.strictEqual(isNaN(sum(NaN, NaN)), true); // Memastikan hasil adalah NaN
});

test('sum with very large numbers', () => {
  assert.strictEqual(sum(1e+10, 1e+10), 2e+10);
});

test('sum with decimal numbers', () => {
  const delta = 1e-10; // Toleransi untuk perbandingan floating point
  assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < delta, '0.1 + 0.2 should be approximately 0.3');
  assert.ok(Math.abs(sum(0.3, 0.4) - 0.7) < delta, '0.3 + 0.4 should be approximately 0.7');
});
