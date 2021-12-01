/* 
    Write a loop that makes seven calls to console.log to output the following triangle.

    #
    ##
    ###
    ####
    #####
    ######
    #######

    */

// Solution 1
let word = '';

for (let i = 0; i < 7; i++) {
	word += '#';
	console.log(word);
}

// Solution 2
let word1 = '#';

for (let i = 0; i <= 7; i++) {
	if (i != 0) {
		console.log(word1.repeat(i));
	}
}

// Solution 3
for (let i = '#'; i.length <= 7; i += '#') {
	console.log(i);
}
