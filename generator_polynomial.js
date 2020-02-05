#! /usr/bin/env node

const Util = require('./models/util').Util;
const util = new Util();

async function generatorPolynomial() {
    util.printToCMD('Input the total number of bits');
    let n = await util.acceptCMDInput();

    util.printToCMD('Input the total number of message bits');
    let k = await util.acceptCMDInput();

    util.printToCMD('Input the Message Polynomial, Example 1010');
    let Mx = await util.acceptCMDInput();

    util.printToCMD(`Input the Coefficients Generator Polynomial, 
         For Example : x^3 + x + 1 will have coefficients of 1011 corresponding to 1x^3 + 0x^2 + 1x + 1`);
    let Gx = await util.acceptCMDInput();

    n = Number(n);
    k = Number(k);
    Mx = Number(Mx);
    Gx = Number(Gx);

    let MxModulo = Mx;

    const MxLength = Mx.toString().length;
    if(MxLength < n) {
        util.printToCMD(`Length of code is ${MxLength} but needs to be ${n}`);

        await util.delay(2);

        const remainder = n - MxLength;
        for(let i = 0; i < remainder; i++) {
            MxModulo = MxModulo * 10;
        }
    }
    moduloDivision();
}

async function moduloDivision(divisor, number) {
    
}

util.runSolution(generatorPolynomial);