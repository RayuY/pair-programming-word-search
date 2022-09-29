// pair programming Hanson Lee & Ray Yu

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposedMatrix = transpose(letters);
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) return true;
  }

  for(y of verticalJoin) {
    if (y.includes(word)) return true;
  }

  return false;
}

const transpose = function (matrix) {
  // Put your solution here
  let result = [];

  for (let y = 0; y < matrix[0].length; y++ ) {
    const row = [];
    for (let x = 0; x < matrix.length; x++) {
      row.push(matrix[x][y]);
    }
    result.push(row);
  }
  
  return result;
};

module.exports = wordSearch