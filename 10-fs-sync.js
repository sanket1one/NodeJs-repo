//  Reading and Writing  in the file

const {readFileSync, writeFileSync} = require('fs');
/* alternative way to import fs file
const fs    = require('fs')
fs.read
*/
console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', 
`Here is the result :${first}, ${second}`,
{flag: 'a'}
)
/* If file is not present node will create one and it rewrite the content */


console.log(`done with the task`);
console.log(`strating the next one`)
