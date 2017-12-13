import { asyncTest } from '../test/async';
import { demo } from './index';

describe('index - /', () => {

    beforeEach(() => {/* setup */});
    afterEach(() => {/* tear-down */});

    describe('demo tests', () => {
        it('should respond with "hello, world"', asyncTest(async () => {
            const result = await demo();
            expect(result).toBe("hello, world");
        }));
    });
});
