let users = [
    {name: 'Petro', gender: 'male', age: 16},
    {name: 'Ihor', gender: 'male', age: 25},
    {name: 'Nastia', gender: 'female', age: 19},
    {name: 'Kira', gender: 'female', age: 34},
    {name: 'Oleh', gender: 'male', age: 40},
    {name: 'Ania', gender: 'female', age: 36},
    {name: 'Bohdan', gender: 'male', age: 47},
    {name: 'Olia', gender: 'female', age: 21},
    {name: 'Nazar', gender: 'male', age: 39},
    {name: 'Roman', gender: 'male', age: 22},

]

const fs = require('fs')
const path = require('path')

const filePathByManOlder20 = path.join(__dirname, 'manOlder20')
const filePathByManYounger20 = path.join(__dirname, 'manYounger20')
const filePathByWomanOlder20 = path.join(__dirname, 'womanOlder20')
const filePathByWomanYounger20 = path.join(__dirname, 'womanYounger20')
console.log(filePathByManOlder20)

fs.mkdir(filePathByManOlder20, {recursive: true}, (err)=>{})

fs.mkdir(filePathByManYounger20,{recursive: true}, (err)=>{})

fs.mkdir(filePathByWomanOlder20, {recursive: true}, (err)=>{})

fs.mkdir(filePathByWomanYounger20, {recursive: true}, (err)=>{})

function createFiles() {
    for (const user of users) {
        if (user.age <=20 && user.gender === "female"){
            fs.appendFile(`${filePathByWomanYounger20}/${user.name}.txt`, JSON.stringify(user), (err)=>{
                if (err){
                    console.log('====================')
                    console.log(err)
                    console.log('=====================')
                }
            })
        }else
        if (user.age >20 && user.gender === "female"){
            fs.appendFile(`${filePathByWomanOlder20}/${user.name}.txt`, JSON.stringify(user), (err)=>{
                if (err){
                    console.log('====================')
                    console.log(err)
                    console.log('=====================')
                }
            })
        }else
        if (user.age <=20 && user.gender === "male"){
            fs.appendFile(`${filePathByManYounger20}/${user.name}.txt`, JSON.stringify(user), (err)=>{
                if (err){
                    console.log('====================')
                    console.log(err)
                    console.log('=====================')
                }
            })
        }else {
            fs.appendFile(`${filePathByManOlder20}/${user.name}.txt`, JSON.stringify(user), (err)=>{
                if (err){
                    console.log('====================')
                    console.log(err)
                    console.log('=====================')
                }
            })
        }
    }
}

createFiles()





//вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках