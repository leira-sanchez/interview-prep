// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') count++;
            search(grid, row, col);
        }
    }
    return count;
};

function search(grid, row, col) {
    if (!grid[row] || !parseInt(grid[row][col])) return;
    grid[row][col] = '0';
    search(grid, row + 1, col);
    search(grid, row - 1, col);
    search(grid, row, col + 1);
    search(grid, row, col - 1);
}

// test 
numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);