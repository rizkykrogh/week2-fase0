// 1
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

// 2
var word2 = 'wow JavaScript is so cool';
var firstWord2 = word2[0] + word2 [1] + word2[2];
var secondWord2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
var thirdWord2 = word2[15] + word2[16];
var fourthWord2 = word2[18] + word2[19];
var fifthWord2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log('First Word ' + firstWord2);
console.log('Second Word ' + secondWord2);
console.log('Third Word ' + thirdWord2);
console.log('Fourth Word ' + fourthWord2);
console.log('Fifth Word ' + fifthWord2);

// 3
var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring[0, 2];
var secondWord3 = word3.substring[4, 13];
var thirdWord3 = word3.substring[15, 16];
var fourthWord3 = word3.substring[18, 19];
var fifthWord3 = word3.substring[21, 24];

console.log('First Word ' + firstWord3);
console.log('Second Word ' + secondWord3);
console.log('Third Word ' + thirdWord3);
console.log('Fourth Word ' + fourthWord3);
console.log('Fifth Word ' + fifthWord3);

// 4
var word4 = 'wow JavaScript is so cool';
var firstWord4 = word4.substring(0, 2);
var secondWord4 = word4.substring(4, 13);
var thirdWord4 = word4.substring(15, 16);
var fourthWord4 = word4.substring(18, 19);
var fifthWord4 = word4.substring(21, 24);

var firstWordlength = firstWord4.length;
var secondWordlength = secondWord4.length;
var thirdWordlength = thirdWord4.length;
var fourthWordlength = fourthWord4.length;
var fifthWordlength = fifthWord4.length;

console.log('First Word ' + firstWord4 + ', with length' + firstWordlength );
console.log('Second Word ' + secondWord4 + ', with length' + secondWordlength);
console.log('Third Word ' + thirdWord4 + ', with length' + thirdWordlength);
console.log('Fourth Word ' + fourthWord4 + ', with length' + fourthWordlength);
console.log('Fifth Word ' + fifthWord4 + ', with length' + fifthWordlength);
