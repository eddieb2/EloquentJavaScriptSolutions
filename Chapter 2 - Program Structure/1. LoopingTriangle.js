// TODO
// Write a loop that makes seven calls to console.log to output the following triangle

//#
//##
//###
//####
//#####
//######
//#######

// ANCHOR This is the correct answer
// NOTE Completed first try
for (let i = "#"; i.length <= 7; i = i + "#") {
  console.log(i);
}

// ANCHOR
// Solution Code
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);
