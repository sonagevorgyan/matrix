const reader = require("readline-sync");
const utils = require('./utils.js');

let leftMat = [[12, 13, 14], 
				[15, 16, 17], 
				[18, 19, 20]];


let rightMat = [[21, 22],
				 [23, 24],
				 [25, 26]];

let matrixArray = utils.multipleMatrix(leftMat, rightMat);

console.log(utils.printMatrix(matrixArray));