// https://leetcode.com/problems/break-a-palindrome/submissions/

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    // a is the smallest lexicographic str
    // if the palindrome is odd, changing the middle won't do anything
    if(palindrome.length < 2) return '';
    for (let i = 0; i < palindrome.length; i++) {
        if(palindrome[i] !== 'a' && i !== Math.floor(palindrome.length / 2)) {
            return palindrome.substring(0 , i) + 'a' + palindrome.substring(i + 1);
        }
    }
    // if they're all a, change the last one to b
    return palindrome.substring(0 , palindrome.length - 1) + 'b';
};

// "abccba"
// "a"
// "aa"
// "aba"

// "aaccba"
// ""
// "ab"
// "abb"

