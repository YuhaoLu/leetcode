/**
 * 0.Name: 
 * Valid Sudoku
 *
 * 1.Description:
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * - Each row must contain the digits 1-9 without repetition.
 * - Each column must contain the digits 1-9 without repetition.
 * - Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * 2.Example:
 * Input: 
 * [
 *   ["5","3",".", ".","7",".", ".",".","."],
 *   ["6",".",".", "1","9","5", ".",".","."],
 *   [".","9","8", ".",".",".", ".","6","."],
 * 
 *   ["8",".",".", ".","6",".", ".",".","3"],
 *   ["4",".",".", "8",".","3", ".",".","1"],
 *   ["7",".",".", ".","2",".", ".",".","6"],
 * 
 *   [".","6",".", ".",".",".", "2","8","."],
 *   [".",".",".", "4","1","9", ".",".","5"],
 *   [".",".",".", ".","8",".", ".","7","9"]
 * ]
 * 
 * Output: 
 * true
 * 3.Solution:
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var checkValid = function(arr) {
    var dict = {};
    var elem = null;
    for(var i = 0; i < arr.length; i++) {
        elem = arr[i];
        if(elem ===".") {
            continue;
        }
        if(!(elem in dict)) {
            dict[elem] = 0;
        }
        else{
            return false;
        }
    }
    return true;
}

var isValidSudoku = function (board) {
    for(var n_row = 0; n_row < 9; n_row++) {
        if(checkValid(board[n_row]) === false) {
            return false;
        }
    }
    for (var n_col = 0; n_col < 9; n_col++) {
        var arr = [];
        for(var i = 0; i < 9; i++) {
            arr.push(board[i][n_col]);
        }
        if(checkValid(arr) === false) {
            return false;
        }
    }
    for(var n_block_row = 0; n_block_row < 3; n_block_row++) {
        for (var n_block_col = 0; n_block_col < 3; n_block_col++) {

            var arr = [];
            for(var n_row = 0; n_row < 3; n_row++) {
                for (var n_col = 0; n_col < 3; n_col++) {
                    arr.push(board[n_block_row * 3 + n_row][n_block_col * 3 + n_col])
                }
            }
            if (checkValid(arr) === false) {
                return false;
            }
        }
    }
    return true;
    
};

// Test Cases
var board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

var board1 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board));