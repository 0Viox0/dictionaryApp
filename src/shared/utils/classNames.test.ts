import { describe, expect, it } from 'vitest';
import { classNames } from './classNames';

describe('classNames function', () => {
    it('should return simple classes', () => {
        const result = classNames('foo', 'bar');
        expect(result).toBe('foo bar');
    });

    it('should class name from the object key', () => {
        const result = classNames('foo', { bar: true });
        expect(result).toBe('foo bar');
    });

    it('should return class names where value is true', () => {
        const result = classNames({ 'foo-bar': true });
        expect(result).toBe('foo-bar');
    });

    it('should not return class names where value is false', () => {
        const result = classNames({ 'foo-bar': false });
        expect(result).toBe('');
    });

    it('should return class names from the keys of multiple objects where values are true', () => {
        const result = classNames({ foo: true }, { bar: true });
        expect(result).toBe('foo bar');
    });

    it('should return class names of the object keys only where values are true', () => {
        const result = classNames('foo', { bar: true, duck: false }, 'baz', {
            quux: true,
        });
        expect(result).toBe('foo bar baz quux');
    });

    it('should handle mixed arguments', () => {
        const result = classNames(
            null,
            false,
            'bar',
            undefined,
            0,
            1,
            { baz: null },
            '',
        );
        expect(result).toBe('bar 1');
    });

    it('should handle arrays', () => {
        const arr = ['b', { c: true, d: false }];
        const result = classNames('a', arr);
        expect(result).toBe('a b c');
    });
});
