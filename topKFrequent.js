// https://leetcode.com/problems/top-k-frequent-words/submissions/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // base case
    // edge cases - lower alphabetical order
    // create hashmap to keep track of frequency
    // sort frequency 
    
    const map = {};
    words.forEach(word => {
        map[word] = map[word] ? map[word] + 1 : 1;
    })
    return Object.keys(map).sort((a, z) => {
       return map[z] - map[a]  === 0 ? a.localeCompare(z) : map[z] - map[a];
    }).slice(0, k);
  
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);
// ["i","love","coding"]