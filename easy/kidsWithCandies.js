// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies); // spread operator with Math.max will fail if the array is too big.
    const output = [];
    
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) output.push(true);
        else output.push(false);
    }
    return output;
};

kidsWithCandies([2,3,5,1,3], 3);
//[true,true,true,false,true]