// Remove vowels from a string
/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    let string = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < S.length; i++) {
        if(!vowels.includes(S[i])) {
            string += S[i];
        }
    }
    return string;
};

const response = removeVowels("leetcodeisacommunityforcoders");
console.log((response));
// "ltcdscmmntyfrcdrs"

// O(1), O(1)
// var removeVowels = function(S) {
//     return S.replace(/a|e|o|i|u/gi,"");
// };