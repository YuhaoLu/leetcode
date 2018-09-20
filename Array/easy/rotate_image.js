/**
 * 0.Name: 
 * Rotate Image (Not Transpose!!)
 * 
 * 1.Description:
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 *
 * 2.Example:
 * Input: 
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ],
 * 
 * Output: 
 * (Clockwise)
 * [
 *   [7,4,1],
 *   [8,5,2],
 *   [9,6,3]
 * ]
 * 
 * (Counter-clockwise)
 * [
 *   [3,6,9],
 *   [2,5,8],
 *   [1,4,7]
 * ]
 * 3.Solution:
 * Iterations:
 * i[0, N/2]
 * j[i, N-i-1]
 *                   i,j
 *           -------------------
 *           [0,0]  [0,1]  [0,2]  [0,3]
 *                  -----
 *           [1,0]  [1,1]  [1,2]  [1,3] j,(N-1)-i
 * 
 * (N-1)-j,i [2,0]  [2,1]  [2,2]  [2,3]
 * 
 *           [3,0]  [3,1]  [3,2]  [3,3]
 *                    (N-1)-i,(N-1)-j
 * 
 * 4.Corner Case:
 * 
 * 5.Complexity:
 * 
 */

// Function
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) { 
    var N = matrix.length;

    // 2D Array Deep Copy!!
    var matrix_org = [];
    for (var i=0; i < N; i++) {
        matrix_org[i] = matrix[i].slice();
    }
    // Rotate 90 degree
    for (var n_row = 0; n_row < N; n_row++) {
        for (var n_col = 0; n_col < N; n_col++) {
            // Clockwise
            matrix[n_col][N-1-n_row] = matrix_org[n_row][n_col];
            // Counter-clockwise
            // matrix[n_row][n_col] = matrix_org[n_col][N-1-n_row];
        }
    }
}

/*
 *                   i,j
 *           -------------------
 *           [0,0]  [0,1]  [0,2]  [0,3]
 *                  -----
 *           [1,0]  [1,1]  [1,2]  [1,3] j,(N-1)-i
 * 
 * (N-1)-j,i [2,0]  [2,1]  [2,2]  [2,3]
 * 
 *           [3,0]  [3,1]  [3,2]  [3,3]
 *                    (N-1)-i,(N-1)-j
 */

var rotate_in_place = function (matrix) {
    var N = matrix.length;
    for(var n_row=0; n_row < N / 2; n_row++) {
        for(var n_col=n_row; n_col < N - n_row - 1; n_col++){
            tmp = matrix[N-1-n_col][n_row];
            matrix[N - 1 - n_col][n_row] = matrix[N - 1 - n_row][N - 1 - n_col];
            matrix[N - 1 - n_row][N - 1 - n_col] = matrix[n_col][N - 1 - n_row];
            matrix[n_col][N - 1 - n_row] = matrix[n_row][n_col];
            matrix[n_row][n_col] = tmp;
        }
    }
}

// Test Cases
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate_in_place(matrix);
console.log(matrix);