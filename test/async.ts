/**
 * Allows using async/await in jasmine tests without calling done() manually
 *
 * @param run - test function to execute
 */
export function asyncTest(run: Function) {
    return function (done: Function) {
        run().then(done, (e: Error) => { this.fail(e); done(); });
    };
}
