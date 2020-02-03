class Util {
    constructor() { }

    acceptCMDInput() {
        let input;

        return new Promise((resolve, reject) => {

            const standard_input = process.stdin;
            standard_input.setEncoding('utf-8');

            standard_input.on('data', data => {
                input = data;
                resolve(input);
            });
        });
    }

    printToCMD(message) {
        console.log(`......... ${message} ............`);
    }

    async runSolution(func) {
        await func();
        this.exit();
    }

    exit() {
        process.exit(0)
    }
}

exports.Util = Util;