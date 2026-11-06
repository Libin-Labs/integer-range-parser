import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('expands a mixed list', () => {
  assert.deepEqual(api.parseIntegerRange('2,4-6'), [2, 4, 5, 6]);
});
test('expands a singleton', () => {
  assert.deepEqual(api.parseIntegerRange('7'), [7]);
});
test('preserves descending token order', () => {
  assert.deepEqual(api.parseIntegerRange('8,2-3'), [8, 2, 3]);
});
test('accepts surrounding whitespace', () => {
  assert.deepEqual(api.parseIntegerRange(' 1 - 2 , 4 '), [1, 2, 4]);
});
test('rejects overlapping values', () => {
  assert.throws(() => api.parseIntegerRange('1-3,3'), RangeError);
});
test('rejects descending ranges', () => {
  assert.throws(() => api.parseIntegerRange('4-2'), RangeError);
});
