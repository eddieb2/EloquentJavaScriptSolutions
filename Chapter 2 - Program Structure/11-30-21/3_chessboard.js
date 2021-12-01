// TODO
// Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate line. At each position of the grid there is either a space or a # character. The characters should form a chessboard.

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// take input for a grid size
// create a standard n x n grid

// Incorrect
const createGrid = (size) => {
	let grid = '';

	for (let y = 0; y < size; y++) {
		if (y >= 1) {
			grid += '\n';
		}

		for (let x = 0; x < size; x++) {
			if (x % 2 == 0) {
				grid += '#';
			} else {
				grid += ' ';
			}
		}
	}

	console.log(grid);
};

createGrid(8);

// Book solution
let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += ' ';
		} else {
			board += '#';
		}
	}
	board += '\n';
}
