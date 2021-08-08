//Modules
// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// First way of doing using the module

// const {sanket, aniket} = require('./4-names');
// const sayHi = require('./5-utils');
// sayHi("suraj");
// sayHi(sanket);
// sayHi(aniket);


const name = require('./4-names');
const sayHi = require('./5-utils');
const data  = require('./6-alternative-flavour')

/* If we call the function inside the module and we importing the module without exporting it
    Still work and even if we don't assign it to a identifier it still gone give the ouput
 */

/* While imorting the module if automatically invoke the function */



require('./7-mind-greande')

sayHi('suraj');
sayHi(name.sanket)
sayHi(name.aniket)


