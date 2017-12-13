import { asyncTest } from '../test/async';
import { demo } from './demo';

describe('demo - ', () => {
    describe('basic', () => {
        it('should respond with "hello, world"', asyncTest(async () => {
            const result = await demo();
            expect(result).toBe("hello, world");
        }));
    });
});