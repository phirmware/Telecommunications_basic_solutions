#! /usr/bin/env node

// DR = 20log(vmax/resolution)
// vmax/resolution = 2^n
// DR = 20log2^n
// DR = n20log2
// DR = 6.02n

const {Util} = require('./models/util');
const util = new Util();

async function logDR() {
    util.printToCMD('Input the number of bits');
    let n = await util.acceptCMDInput();
    n = Number(n);
    util.printToCMD(20 * Math.log10(2) * n);
}

util.runSolution(logDR);

module.exports = logDR;
