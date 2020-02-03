#! /usr/bin/env node
// Other forms 

const { Util } = require('./models/util');
const utils = new Util();

const { } = require('./index');

// function convertToNumber(p) {
//     p = Number(p);
//     return p;
// }

// (async function generalCalculation() {
//     utils.printToCMD('Press enter if no value');
//     utils.printToCMD('Input the number of bits');
//     let n = await utils.acceptCMDInput();

//     utils.printToCMD('Input the Dynamic Range');
//     let DR = await utils.acceptCMDInput();

//     utils.printToCMD('Input the Signal to Noise ratio');
//     let sn = await utils.acceptCMDInput();

//     utils.printToCMD('Input Vmax value');
//     let vmax = await utils.acceptCMDInput();

//     utils.printToCMD('Input resolution value');
//     let r = await utils.acceptCMDInput();

//     n = Number(n);
//     DR = Number(DR);
//     sn = Number(sn);
//     vmax = Number(vmax);
//     r = Number(r);

//     if(!n) {
//         // n not given
//         // DR = 6.02n : n = DR/6.02
//         n = DR/6.02;
//         utils.printToCMD(`The Number of bits equals ${n}`)
//     }
//     if(!DR) {
//         dynamicRange(vmax, r);
//     }
//     if(!sn) {
//         // signal to noise ratio not given
//         // 1.76 + 6.02n
//         // signalToNoiseRatio();
//     }

//     utils.exit();

//     console.log(n. DR, 'Here');
//     utils.exit();
// })();