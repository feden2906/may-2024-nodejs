// const {foo} = require('./helpers/helper');

// console.log('____________ main.js_____________');
//
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd())
// foo()


const readline = require('node:readline');

const foo = async () => {
    const rlInstance = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rlInstance.question('What is your name?', (name) => {
        console.log(`Hello ${name}`);
        rlInstance.close();
    })
}

void foo();
