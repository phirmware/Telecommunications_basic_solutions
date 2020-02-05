#! /usr/bin/env node

// Telecommunications solutions

// sample frequency
// 2 * fmax

// Niquist Rate , Calculated by multiplying the highest frequency
// by 2, The Niquist rate is >= two times the highest frequency

const { Util } = require('./models/util');
const utils = new Util();

async function niquistRate() {
    utils.printToCMD('Input frequency 1');
    let freq1 = await utils.acceptCMDInput();

    utils.printToCMD('Input frequency 2');
    let freq2 = await utils.acceptCMDInput();

    freq1 = Number(freq1);
    freq2 = Number(freq2);

    let highestFrequency = freq1 < freq2 ? freq2 : freq1;
    const niquist = highestFrequency * 2;
    utils.printToCMD(`The Niquist rate should be >= ${niquist}`);
}

utils.runSolution(niquistRate);

module.exports = niquistRate;