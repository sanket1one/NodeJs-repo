//Modules
// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const secret = 'SUPER SECRET'
const sanket = 'sanket';
const aniket = 'aniket';


const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi("suraj");
sayHi(sanket);
sayHi(aniket);
