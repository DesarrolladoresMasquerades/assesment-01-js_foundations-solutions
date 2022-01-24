// ---------- Explicit loop ------------

function maxTwoDimArray(matrix) {
   let greatestNumber = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > greatestNumber){
                greatestNumber = matrix[i][j];
             }
         }
     }
     return greatestNumber
}

//


// ---------- For Each loop ------------

function maxTwoDimArray(matrix) {
  if (matrix.length === 0) return false;

  let highestNum = 0;

  matrix.forEach((element) => {
    element.forEach((number) => {
      if (number > highestNum) {
        highestNum = number;
      }
    });
  });

  return highestNum;
}


// ---------- Compact with array methods ------------

function maxTwoDimArray(matrix) {
  const flatArr = matrix.flat()
  return flatArr.reduce((a, b) => Math.max(a, b))
}
