var size = 8;
var result = '';
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
      result += ' ';
    } else if ((j % 2 === 0 && i % 2 === 1) || (j % 2 === 1 && i % 2 === 0)) {
      result += '#'; 
    }
  }
  result += '\n';
}

//2
var size = 8;
var result = '';
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
      result += ' ';
    } else {
      result += '#'; 
    }
  }
  result += '\n';
}
//3 
var size = 8;
var result = '';
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((j + i) % 2 === 0) {
      result += ' ';
    } else {
      result += '#'; 
    }
  }
  result += '\n';
}
//4
var size = 8;
var result = '';
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((j + i) % 2) {
      result += '#';
    } else {
      result += ' '; 
    }
  }
  result += '\n';
}
//5
var size = 8;
var result = "";
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    result += (j + i) % 2 ? '#' : ' ';
  }
  result += '\n';
}

//6
function createBoard(size, black = '#', white = ' ') {
    let even = (white + black).repeat(size / 2) + (size % 2 ? white : '') + '\n';
    let odd  = (black + white).repeat(size / 2) + (size % 2 ? black : '') + '\n';
    return     (even  + odd  ).repeat(size / 2) + (size % 2 ? even  : '');
  }
  
  console.log(createBoard(8));
  ///con
  function buildBoard(size) {
    var board = Array(size);
    for (var row = 0; row < size; row++) {
        board[row] = Array(size).fill(0);
        for (var col = row % 2; col < size; col = col + 2) {
            board[row][col] = 1;
        }
    }
    return board;
}

function displayBoard(size) {
    var board = buildBoard(size);
    var output = '';
    board.forEach(function(row) {
        row.forEach(function(col) {
             output += (col === 1) ? '#' : ' ';
        });
        output += "\n";
    });
    console.log(output);
}

displayBoard(8);
displayBoard(20);