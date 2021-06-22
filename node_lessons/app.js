// const {createUser, var22, myfunc} = require('./dir/file')
// let userFunc = createUser('oleh', 'oleg_bob@ukr.net')
// console.log(userFunc);
// console.log('=======================')
// console.log(var22)
// console.log('======================')
// myfunc()
// require('./dir/file')// якщо робити require цілого файлу то в консолі запускається все що в тому файлі
// console.log('--------APP--------')
// console.log(__filename)
// console.log(__dirname)
// console.log('---------APP-------')

// const fs = require('fs'); //всі require створювати по алфавіту

// const filePath = __dirname + '/dir/dog.txt';
// const filePathToRemove = __dirname + '/dir/ewq.php';

// const filePath = __dirname + '/dir/file.js';
// const filePath2 = __dirname + '/dir/fileCopy.js';
//
// const filePathNew = __dirname + '/movie/hello.world';
//
//
//
// console.log(filePath);

// fs.writeFile(filePath, 'Hello World', (err)=> {
//     if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//     }
// })

//fs.appendFile(filePath, 'Hi Man', (err)=> {  //дописує в існуючий файл або створює новий о заданому шляху
//     if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//     }
// })

// fs.readFile(filePath, (err, data)=>{
//     if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//         return
//     }
//     console.log(data.toString());
// })

// fs.mkdir(`${__dirname}/movie/home`, {recursive:true}, (err)=>{ //{recursive:true} опція яка потрібна для створення всіх директорій а не тільки останньої
//     console.log(err)
// })

// fs.readdir(`${__dirname}/movie/home`, (err, files)=>{// читаєм директорію
//     if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//         return
//     }
//     console.log(files);
//     files.forEach(file=> {
//         fs.stat(`${__dirname}/movie/home/${file}`, (statError, fileStat)=>{
//             if (statError){
//                 console.log('====================')
//                 console.log(statError)
//                 console.log('=====================')
//                 return
//             }
//
//             console.log('*************************');
//             console.log(file);
//             console.log(fileStat);
//             console.log(fileStat.size);
//             console.log(fileStat.isDirectory());
//             console.log(fileStat.isFile());
//             console.log('*****************************');
//         })
//     })
// }
// )

// fs.rmdir(`${__dirname}/movie/home`, {recursive: true}, err => {  //без {recursive: true} не видалить директорію з файлами
//     if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//         return
//     }
// })

// fs.unlink(filePathToRemove, err => {
//         if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//         return
//     }
// })

// fs.rename(filePath, filePath2, err => { //перейменовуємо файл в межах однієї директорії
//             if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//         return
//     }
// })

// fs.rename(filePath2, filePathNew, err => { //перейменовуємо файл в межах різних директорій
//     if (err){
//         console.log('====================')
//         console.log(err)
//         console.log('=====================')
//         return
//     }
// })

//==================Path=========================
// const path = require('path')
// let s = path.join(__dirname, 'movie', 'xxx', 'test', 'zz.mp4')  //щоб не використовувати '/'
// let s1 = path.normalize('/hello/faro/node\\\\//uy/kljhjhkc/ssd')
// console.log(s)
// console.log(s1)

//====================streems=================
const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname, 'movie', 'feb', 'node.txt')
const filePath2 = path.join(__dirname, 'movie', 'feb', 'text.txt')
let writeStream = fs.createWriteStream(filePath)


for (let i = 0; i < 999999; i++) {
    writeStream.write('TEST\n')
}

let readStream = fs.createReadStream(filePath)
let writeStream2 = fs.createWriteStream(filePath2)

// readStream.on('data', chunk => {//отримуєм дані з одного стріма і перенапрвляєм в інший, але краще через пайпи
//     writeStream2.write(chunk)
// })

readStream.on('end', ()=>{
    console.log('read is over');
})

readStream.pipe(writeStream2)