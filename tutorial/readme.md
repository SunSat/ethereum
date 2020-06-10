BIP39 - Mnemonic Generation with detailed & proper explnation.

Before generate HD wallet address we need to understand some basic concepts and terminalogy.

1. Entrophy : A randomly generated Bits the length between 128 to 256. You can use any technique to generate the bits.
2. Mnemonic : The words count between 12 to 24 from 2048 words list which is specified in <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">BIP-39</a>.  
    3. Mnemonics word Max Bit: The Words list start from 0 to 2047 the binary representation of 2047 is '11111111111' which is 11 bits. Which is the maximum value of the index.

Generating the mnemonic

Step 1 : Need to decide the total number of Mnemonic words to generate. The words counts must from the like 12, 15, 18, 21 & 24.
    Lets consider 15 words in this example.

Step 3 : 11 is the maximum bits count can be a word from words list that is 2047 is the max(Read : Note 3). Hence
    15 * 11 = 165 (Totally we need to generate 165 bits entrophy).

Step 4 : Calculat checksum as per the table below.
    165 % 32 = 5 (5 bits knows as checksum bits). 

npm install -g -s crypto-js

  for(let co = 0,st = 0,en = 11; co < finalSt.length / 11 ; co++) {
    let bi = finalSt.slice(st,en);
    let biDec = parseInt(bi,2)
    st = en;
    en = en + 11;
    finstSt.push(BIP39.wordlists.english[biDec]); 
   }

Step 5 : Actuall Entrophy :
    a) 165 - 5 = 160. 160 bits of entrophy we need to generate.
        Code : 
            let crypto = require('crypto');
            //crypto.randomBytes() will generate crypto graphally random bytes in hexa decimal format between 0 to ff.
            //The maximum value of randome bytes is 'ff' which if 8 bits. Hence 160 / 8 = 20. 
            let randomBytes = crypto.randomBytes(20).toString('hex');
            //The above code will generate randome bytes 20 hexa deccimal character ex: 4c2efc8d134f89877d9df491b13cc7c7f3b84790

    b) Generate Entrophy 
        From randomeBytes parse each character and and covert into hexadecimal and fill 0 for remaining bits. The maximum value of 
        the character is f which '1111' so convert all the hexa decimal value to 4 bits length. Fill 0 for remaining bits.
        code :
            let finalArr = '';
            for(let count = 0;count < randomBytes.length ;count ++)  {
                let ch1 = randomBytes.charAt(count);
                let bitsVal = parseInt(ch1,16).toString(2);
                finalArr = finalArr.concat('0000'.slice(bitsVal.length).concat(bitsVal));
            }
            //This will generate entrophy of '010011000010111011111100100011010001001101001111100010011000011101111101100
            1110111110100100100011011000100111100110001111100011111110011101110000100011110010000' 
            having length of 160.

Step 5 : Calculate Checksum(Not -b. Its -0).
    a) Find the hash :

        For this step we need linux or unix machine. I have tried and did not find any javascript code to perform this operation.
        Take the full entrohpy string and find "BINARY" checksum(not -b. Its -0). In linux or Unix machine execute below code.
        $ echo 0100110000101110111111001000110100010011010011111000100110000111011111011001110111110100100100011011000100111100110001111100011111110011101110000100011110010000 | shasum -a 256 -0
        // shasum -a 256 -0 (or --01) -0 means binary string format( be aware -b also available which will not work in this case.)  
        Which results in below hash in hexa decimal format.
        665909c722aca70c49a2362cc238ff138695666da42062095d8c558163bfe719
    
    b) Calculate Checksum :
        In Step 4. We have calculated checksum had 5 bits. To get 5 bits from the above hash we need  to extract 2 characters. If checksum iss 4 bits then 1 character is enough.
        code :
            let checksumHexa = '66';
            let checksumBits = parseInt(checksumHexa, 16).toString(2);
            //which results in : 1100110
            //From the result take 5 first bits which is : 11001

    c) Append Cehcksum :   
        
        Step 5 : b) we have alredy found the entrohpy. Append this checksum with entrophy at the end.
        010011000010111011111100100011010001001101001111100010011000011101111101100111011111010010010001101100010011110011000111110001111111001110111000010001111001000011001
        Which leads to 165 bits of string.

Step 6 : Find Mnemonic:

    a) Split the above entrohpy into 11 bits each and calculate its correspinding decimal value and find the word from the list.
    code :

        let finstSt = [];
        //co is count, st is start, en is end.
        for(let co = 0,st = 0,en = 11; co < finalSt.length / 11 ; co++) {
            let bi = finalSt.slice(st,en);
            let biDec = parseInt(bi,2)
            st = en;
            en = en + 11;
            finstSt.push(BIP39.wordlists.english[biDec]);          
        }

The count is : 00  The binary String is :  10110110001  ,The Decimal value is :  1457  .& the word is :  renew
The count is : 01  The binary String is :  11010100111  ,The Decimal value is :  1703  .& the word is :  stay
The count is : 02  The binary String is :  00010110011  ,The Decimal value is :  0179  .& the word is :  biology
The count is : 03  The binary String is :  01001101110  ,The Decimal value is :  0622  .& the word is :  evidence
The count is : 04  The binary String is :  01100100000  ,The Decimal value is :  0800  .& the word is :  goat
The count is : 05  The binary String is :  11111001010  ,The Decimal value is :  1994  .& the word is :  welcome
The count is : 06  The binary String is :  00100011101  ,The Decimal value is :  0285  .& the word is :  casual
The count is : 07  The binary String is :  01111000001  ,The Decimal value is :  0961  .& the word is :  join
The count is : 08  The binary String is :  00000011000  ,The Decimal value is :  0024  .& the word is :  adapt
The count is : 09  The binary String is :  00001011111  ,The Decimal value is :  0095  .& the word is :  armor
The count is : 10  The binary String is :  11000111011  ,The Decimal value is :  1595  .& the word is :  shuffle
The count is : 11  The binary String is :  01010011111  ,The Decimal value is :  0671  .& the word is :  fault
The count is : 12  The binary String is :  10000010100  ,The Decimal value is :  1044  .& the word is :  little
The count is : 13  The binary String is :  10000101100  ,The Decimal value is :  1068  .& the word is :  machine
The count is : 14  The binary String is :  11110110100  ,The Decimal value is :  1972  .& the word is :  walk
The count is : 15  The binary String is :  11010111101  ,The Decimal value is :  1725  .& the word is :  stumble
The count is : 16  The binary String is :  11101111011  ,The Decimal value is :  1915  .& the word is :  urge
The count is : 17  The binary String is :  11011011010  ,The Decimal value is :  1754  .& the word is :  swap

and the final list is : renew stay biology evidence goat welcome casual join adapt armor shuffle fault little machine walk stumble urge swap


Using the validation 
console.log(BIP39.validateMnemonic(fiSt)); we can validation.

After this we can generate seed, public/private key, extended public/private key and setof address as per BIP-39,BIP-44





