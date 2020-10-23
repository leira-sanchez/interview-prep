/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function(points, K) {
    // base case
    // edge cases
    // create hashmap with key = points, value = distance
    // you're looking for smallest distance
    
    if (points.length === K) return points;
    var getLength = ([a, b]) => {  // destructuring from input (a or b)
        return (a * a) + (b * b); // shorter than using Math.pow()
    }
    // sorted from smaller to biggest, returns a subarray with the K smallest elements
    return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K); 
};

// test cases:
kClosest([[1,3],[-2,2],[2,-2]], 2);

