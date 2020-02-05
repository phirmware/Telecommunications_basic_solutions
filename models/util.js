class Util {
    constructor() { }

    acceptCMDInput() {
        return new Promise((resolve, reject) => {

            const standard_input = process.stdin;
            standard_input.setEncoding('utf-8');

            standard_input.on('data', data => {
                resolve(data);
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

    convertToMilliseconds(number) {
        return number * 1000;
    }

    delay(seconds) {
        const time = this.convertToMilliseconds(seconds);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), time);
        });
    }

    exit() {
        process.exit(0)
    }
}

exports.Util = Util;