#! /usr/bin/env node

// Resolution, the minimum value that can be represented by a PCM wave
// resolution = vmax/2^n
// where n is the number of bits

const { Util } = require('./models/util');
const utils= new Util();

async function resolution() {
    utils.printToCMD('Input the number of bits');
    let n = await utils.acceptCMDInput();

    utils.printToCMD('Input the maximum voltage value');
    let vmax = await utils.acceptCMDInput();

    n = Number(n);
    vmax = Number(vmax);

    const r = vmax / 2**n;
    utils.printToCMD(`The resolution value is ${r}`);
    utils.exit();
};

utils.runSolution(resolution);

module.exports = resolution;