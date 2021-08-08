//  npm -global command, comes with node
//  npm - version

//  local dependency - use it only in this particular project
//  npm i <packageName>

//  global dependency - use it in any project
//  npm intall -g <packageName>
//  sudo  npm install -g <packageName> (mac book) //g means globally

//  package.json - manifest file (stores important info about project/package)
//  1. manual approach (creat package.json in the root, create properties etc)
//  2. npm init (step by step, press enter to skip)
//  3. npm init -y (everything default)


/* Using the dependeceies that we use */
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)