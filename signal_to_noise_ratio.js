#! /usr/bin/env node

// Signsl to noise ratio
// S/N = 1.76 + 6.02n

const { Util } = require('./models/util');
const utils = new Util();

async function signalToNoiseRatio() {
    utils.printToCMD('Input the number of bits');
    let n = await utils.acceptCMDInput();

    n = Number(n);

    let s = 1.76 + (6.02 * n);
    utils.printToCMD(`The Signal to Noise ratio is ${s}`);
    utils.exit();
}

utils.runSolution(signalToNoiseRatio);

module.exports = signalToNoiseRatio;
