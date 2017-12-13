import * as jasmine from 'jasmine-node';
import * as  minimist from 'minimist';

let args = minimist(process.argv.slice(2));

// Allows usage of the --specs flag
// Example Usage: npm test -- --specs server-base
let specRegExp = new RegExp(`${args.specs || ''}.spec.ts`, 'i');

console.log(`::: Running unit tests with matcher ${specRegExp}`);

const options: jasmine.ExecuteSpecsOptions = {
    specFolders: ['./src'],
    regExpSpec: specRegExp,
    isVerbose: true,
    onComplete: runner => {
        let exitCode = 1;
        if (runner.results().failedCount === 0) {
            exitCode = 0;
        }
        process.exit(exitCode);
    },
    includeStackTrace: true,
};

jasmine.executeSpecsInFolder(options);
