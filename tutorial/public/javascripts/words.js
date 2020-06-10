const BIP39 = require('bip39');
let words1 = BIP39.wordlists.english;
for(let i = 0; i < words1.length; i++) {
    if(words1[i] === 'swap') {
        console.log(i);
        break;
    }
}