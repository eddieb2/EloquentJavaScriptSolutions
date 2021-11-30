// TODO
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers disvisible by only one of those)

// loop through 1 - 100 and console log all number
// make 2 exceptions
//          - fizz if divisible by 3  and replace number
//          - buzz if divisible by 5 and not 3 and replace number

// NOTE References
// https://itnext.io/fizzbuzzbazz-how-to-answer-and-how-not-to-answer-661fd8842c40

// Solution 1 : showing use of if/if else statements
const fizzBuzz = () => {
	for (let i = 1; i <= 100; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			console.log('FizzBuzz');
		} else if (i % 5 === 0 && i % 3 !== 0) {
			console.log('Buzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else {
			console.log(i);
		}
	}
};

fizzBuzz();

// Solution 2 : more adaptable
const fizzBuzz2 = () => {
	for (let i = 1; i <= 100; i++) {
		let output = '';

		if (i % 3 === 0) {
			output += 'Fizz';
		}

		if (i % 5 === 0) {
			output += 'Buzz';
		}

		if (i % 7 === 0) {
			output += 'Bazz';
		}

		if (output === '') {
			output = i;
		}

		console.log(output);
	}
};

fizzBuzz2();

// Solution 3: using hash

const fizzBuzz3 = () => {
	let fizzHash = {
		3: 'Fizz',
		5: 'Buzz',
		7: 'Bazz',
	};

	// loop through 1 - 100;
	for (let i = 1; i <= 100; i++) {
		let output = '';

		for (let num in fizzHash) {
			if (i % num === 0) {
				output += fizzHash[num];
			}
		}

		if (output === '') {
			output = i;
		}

		console.log(output);
	}
};

fizzBuzz3();
