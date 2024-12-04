const http = require('node:http');
const path = require('node:path');
const readline = require("node:readline/promises");
const fs = require('node:fs/promises');
const os = require('node:os');
const emitter = require('node:events');
const fsCB = require('node:fs');



const foo = async () => {
    //http
    // const server = http.createServer((req, res) => {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //
    //     const url = req.url;
    //
    //     if (url === '/about') {
    //         switch (req.method) {
    //             case 'GET':
    //                 return res.end(JSON.stringify({
    //                     data: 'About Page',
    //                 }));
    //             case 'POST':
    //                 return res.end(JSON.stringify({
    //                     data: 'About Page',
    //                 }));
    //         }
    //     }
    //     if (url === '/contact') {
    //         return res.end(JSON.stringify({
    //             data: 'Contact Page',
    //         }));
    //     }
    // });
    //
    // server.listen(8000);

    //path
    // const pathToHelper = path.join(__dirname, 'helpers', 'helper.js');
    // console.log(path.basename(pathToHelper));
    // console.log(path.dirname(pathToHelper));
    // console.log(path.extname(pathToHelper));
    // console.log(path.parse(pathToHelper));
    // console.log(path.normalize('/home/maksym///\//WORK////Lessons/may-2024-nodejs/helpers'));
    // console.log(path.isAbsolute('/home/maksym/WORK/Lessons/may-2024-nodejs/helpers/helper.js'));
    // console.log(path.isAbsolute('./helpers/helper.js'));

    //readline
    // const rlInstance = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // const name = await rlInstance.question('What is your name?');
    // console.log(`Hello ${name}`);
    // const age = await rlInstance.question('How old are you?');
    // console.log(`You are ${age} years old`);
    // // rlInstance.close();
    // process.exit(0);

    //fs
    // await fs.writeFile('test.txt', 'Hello World');
    // // await fs.writeFile('test.json', JSON.stringify([{ name: 'Maksym', age: 25 },{ name: 'Maksym', age: 25 },{ name: 'Maksym', age: 25 }], null,2));
    // const data = await fs.readFile(path.join(process.cwd(), 'test.txt'), 'utf-8');
    // console.log(data);
    // const data2 = await fs.readFile(path.join(process.cwd(), 'test.json'), 'utf-8');
    // console.log(JSON.parse(data2));
    // await fs.appendFile('test.txt', '\nHello World 2');
    // await fs.appendFile('test.txt', '\nHello World 3');
    // await fs.appendFile('test.txt', '\nHello World 4');
    // await fs.rename('test.json', 'helpers/test2.json');
    // await fs.copyFile('test.txt', 'test2.txt');
    // await fs.mkdir(path.join(process.cwd(), 'sdf', 'eee', 'rrr'), { recursive: true });
    // await fs.rmdir(path.join(process.cwd(), 'sdf', 'eee', 'rrr'))
    // await fs.rmdir(path.join(process.cwd(), 'sdf'))
    // await fs.rm(path.join(process.cwd(), 'sdf'), { recursive: true, force: true });
    // await fs.unlink('test2.txt');
    // await fs.mkdir('sdf/sdf')
    // const stat = await fs.stat(path.join(process.cwd()));
    // console.log(stat.isDirectory());
    // const dirs = ['wwww', 'rrr', 'ttt', 'yyy'];
    // for (const dirName of dirs) {
    //     await fs.mkdir(path.join('tttttt',dirName));
    // }

    //os
    // console.log(os.arch());
    // console.log(os.cpus());
    // console.log(os.totalmem() / 1024 / 1024 / 1024);
    // console.log(os.freemem() / 1024 / 1024 / 1024);
    // console.log(os.homedir());
    // console.log(os.hostname());
    // console.log(os.release());
    // console.log(os.tmpdir());
    // console.log(os.type());
    // console.log(os.uptime());
    // console.log(os.userInfo());
    // console.log(os.version());
    // console.log(os.networkInterfaces());
    // console.log(os.platform());

    //events
    // const em = new emitter.EventEmitter();
    // em.on('first_visit', (www, eee) => {
    //     //send email
    //     console.log(`First visit [email] to ${www} ${eee}`);
    // });
    // em.on('first_visit', () => {
    //     //send sms
    //     console.log('First visit [sms]');
    // });
    // em.emit('first_visit', 'Maksym', 25);
    // em.emit('first_visit', 'Maksym', 26);
    // em.emit('first_visit', 'Maksym', 27);
    // em.emit('first_visit', 'Maksym', 28);
    //
    // em.once('second_visit', () => {
    //     console.log('Second visit');
    // });
    // em.emit('second_visit');
    // em.emit('second_visit');
    // em.emit('second_visit');

    //stream
    // const readStream = fsCB.createReadStream('www.pdf');
    // const writeStream = fsCB.createWriteStream('www2.pdf');
    // readStream.on('data', (chunk) => {
    //     writeStream.write(chunk);
    // });
    // readStream.pipe(writeStream);
}

void foo();
