const path = require('path')

//Return platform based seperator
console.log(path.sep)

// To join the path to the js file
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

// return the last child detail
const base = path.basename(filePath)
console.log(base)

//  return the absolulte directory name of the file or folder
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)

