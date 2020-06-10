let crypto = require('crypto');
let utils = require('ethers').utils;
const CryptoJS = require('crypto-js');
const BIP39 = require('bip39');

let wordCount = 15;
let bitsLen = wordCount * 11;
let cehckSumBits = bitsLen  % 32;
let totalNuBytes = (bitsLen - cehckSumBits) / 8;

console.log("wrods Count : ", wordCount, ", bitsLen : ", bitsLen, ", cehckSumBits : ", cehckSumBits, ", totalNuBytes :", totalNuBytes * 2, "finalNumberFBits : ", totalNuBytes * 2 * 4);

let randomBytes = '4c2efc8d134f89877d9df491b13cc7c7f3b84790';// crypto.randomBytes(totalNuBytes).toString('hex');
console.log('Randome Bytes ; ', randomBytes, randomBytes.length);

let finalArr = '';
for(let count = 0;count < randomBytes.length ;count ++)  {
    let ch1 = randomBytes.charAt(count);
    let bitsVal = parseInt(ch1,16).toString(2);
    finalArr = finalArr.concat('0000'.slice(bitsVal.length).concat(bitsVal));
}
console.log(finalArr, finalArr.length);
let subSt = [];
let remainingBits = finalArr.length  / 32;
var hash = CryptoJS.SHA256(finalArr).toString(CryptoJS.enc.Hex);
//console.log(hash);
let first2Dig = '6b'//hash.slice(0,1);
let decValue = parseInt(first2Dig,16);
console.log("fist2Dight", first2Dig, "first2Dight Decimal Value is : ", "0000".slice(decValue.toString(2).length).concat(decValue.toString(2)));
decValue = "0000".slice(decValue.toString(2).length).concat(decValue.toString(2));
let finalSt = finalArr.concat(decValue);

console.log("--------");
finalSt = '101101100011101010011100010110011010011011100110010000011111001010001000111010111100000100000011000000010111111100011101101010011111100000101001000010110011110110100110101111011110111101111011011010';
console.log(finalSt, finalSt.length);
let finstSt = [];
for(let co = 0,st = 0,en = 11; co < finalSt.length / 11 ; co++) {
    let bi = finalSt.slice(st,en);
    let biDec = parseInt(bi,2)
    st = en;
    en = en + 11;
    finstSt.push(BIP39.wordlists.english[biDec]);    

    //These lines to print we can ommit. 
    let coSt = new String(co);
    coSt = "00".slice(coSt.length).concat(coSt);
    let biVal = new String(biDec);
    biVal = "0000".slice(biVal.length).concat(biVal);
    console.log("Count:",coSt,",Binary :",bi,",Decimal:",biVal,",& word:",BIP39.wordlists.english[biDec]);
    
}
let fiSt = finstSt.join(" ");
console.log(fiSt);
console.log(BIP39.validateMnemonic(fiSt));

/*let checksumSt = finalArr.slice(finalArr.length - remainingBits);
console.log('-remainingBits--- : ', remainingBits, "checcksum string", checksumSt, "checksum string decimal value is : ", parseInt(checksumSt,2));
let checksumDecVal = parseInt(checksumSt,2);
console.log('------checksumDecVal : ', checksumDecVal);

var hash = CryptoJS.SHA256(finalArr).toString(CryptoJS.enc.Hex);
let first2Dig = hash.slice(0,1);
let decValue = parseInt(first2Dig,16);
console.log('hash :', hash, "fist2Dight", first2Dig, "first2Dight Decimal Value is : ", decValue);

let finalCehckSum = checksumDecVal + decValue;
let finalCheckSumBiSt = "00000000000".slice(finalCehckSum.toString(2).length) + finalCehckSum.toString(2);
console.log('The final Checksum is : ', finalCehckSum, "finalcheckbinary",finalCehckSum.toString(2), "fianlValue : ", finalCheckSumBiSt);

let finalSt = finalArr.slice(0, finalArr.length - remainingBits).concat(finalCheckSumBiSt);
console.log("the final St ",finalSt, "length", finalSt.length);
console.log('------');

let finstSt = [];
let st = " ";
for(let co = 0,st = 0,en = 11; co < finalSt.length / 11 ; co++) {
    let bi = finalSt.slice(st,en);
    console.log("The str is : ", bi, " ,The binary value is : ", parseInt(bi,2));
    bi = parseInt(bi,2)
    st = en;
    en = en + 11;
    //finstSt.concat();
    finstSt.push(BIP39.wordlists.english[bi]);    
}
let fiSt = finstSt.join(" ");
console.log(fiSt);
console.log(BIP39.validateMnemonic(fiSt));

*/


// for(let rBytes of randomBytes) {
//     console.log("The Rbytes each is : ",parseInt(rBytes,16).toString(16));
//     let b1 = parseInt(rBytes,16).toString(16);
//     console.log(b1,b1.length);
//     //  if(b1.length !== 8) {
//     //     let emptyArr = new Array((8 - b1.length));
//     //     emptyArr.fill('0');
//     //     puArr.push(emptyArr.join('').concat(b1));
//     //  }
//     //  else {
//     //     puArr.push(b1);
//     //  }
// }
// //console.log(puArr);


