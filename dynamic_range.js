#! /usr/bin/env node

// Dynamic range 
// D = max voltage / resolution
// Resolution == min voltage

// DR = 2^n , where n = number of bits


const { Util } = require('./models/util');
const util = new Util();

async function dynamicRange(vmax, resolution) {
    util.printToCMD('Input the maximum voltage');
    vmax = vmax ? vmax : await util.acceptCMDInput();
    util.printToCMD('Input the resolution value');
    resolution = resolution ? resolution : await util.acceptCMDInput();

    resolution = Number(resolution);
    vmax = Number(vmax);

    const DR = vmax / resolution;
    util.printToCMD(`The Dynamic range is ${DR}`)
}

util.runSolution(dynamicRange);

module.exports = dynamicRange;
