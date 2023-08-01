import { test, expect } from 'vitest';
import {add, subtract} from './calculator.ts';

test('test addition', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(0.5, 525.3)).toBe(525.8);
});

test('test subtraction', () => {
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(51.5, 1.5)).toBe(50);
});