function multipleMatrix(leftMat, rightMat) {
	if (leftMat[0].length !== rightMat.length) return null;
	
	let matrixArray = [];
	let currentNumber;
	let matMultiply = 0;
	
	for(let i = 0; i < leftMat.length; i++) { 
		matrixArray.push([]);
		
		for(let j = 0; j < rightMat[0].length; j++) { 		
			for (let k = 0; k < rightMat.length; k++) { 
				currentNumber = leftMat[i][k] * rightMat[k][j];
				matMultiply += currentNumber;
			}
			matrixArray[i].push(matMultiply);
			matMultiply = 0; 
		}
	}
	return matrixArray;
}

function printMatrix(matrixArray) {
	let stringProducts = '';

	for(let i = 0; i < matrixArray.length; i++) {
		for(let j = 0; j < matrixArray[0].length; j++) {
			stringProducts += matrixArray[i][j] + '\t';		
		}
		stringProducts += '\n'; 
	}
	return stringProducts;
}

module.exports = {
	multipleMatrix,
	printMatrix
}