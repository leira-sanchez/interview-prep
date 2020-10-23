// https://leetcode.com/problems/merge-intervals/submissions/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    intervals.sort((a,z) => a[0] - z[0])
    const merged = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    for (let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] <= end) {
            end = Math.max(end, intervals[i][1])
        } else {
            merged.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    merged.push([start, end]);
    return merged;
};

merge([[1,3],[2,6],[8,10],[15,18]]);
// [[1,6],[8,10],[15,18]]