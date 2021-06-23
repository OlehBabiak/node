const fs = require('fs')
const path = require('path')

let generalGroupPath = path.join(__dirname, 'general group')
let firstGroupPath = path.join(generalGroupPath, 'first group')
let secondGroupPath = path.join(generalGroupPath, 'second group')
let boysPath = path.join(__dirname, 'boys')
let girlsPath = path.join(__dirname, 'girls')

fs.mkdir(generalGroupPath, {recursive: true}, (err) => {
})
fs.mkdir(firstGroupPath, {recursive: true}, (err) => {
})
fs.mkdir(girlsPath, {recursive: true}, (err) => {
})

fs.mkdir(boysPath, {recursive: true}, (err) => {
})
fs.mkdir(secondGroupPath, {recursive: true}, (err) => {
})

let student1Path = path.join(firstGroupPath, 'oksana.json')
fs.writeFile(student1Path, '{"name": "Oksana", "age": 23, "gender": "female"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student2Path = path.join(firstGroupPath, 'ihor.json')
fs.writeFile(student2Path, '{"name": "Ihor", "age": 28, "gender": "male"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student3Path = path.join(firstGroupPath, 'petro.json')
fs.writeFile(student3Path, '{"name": "Petro", "age": 32, "gender": "male"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student4Path = path.join(firstGroupPath, 'nadja.json')
fs.writeFile(student4Path, '{"name": "Nadja", "age": 26, "gender": "female"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student5Path = path.join(firstGroupPath, 'rostyk.json')
fs.writeFile(student5Path, '{"name": "Rostyk", "age": 34, "gender": "male"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student6Path = path.join(firstGroupPath, 'ljuda.json')
fs.writeFile(student6Path, '{"name": "Ljuda", "age": 31, "gender": "female"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student7Path = path.join(secondGroupPath, 'roman.json')
fs.writeFile(student7Path, '{"name": "Roman", "age": 33, "gender": "male"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student8Path = path.join(secondGroupPath, 'nazar.json')
fs.writeFile(student8Path, '{"name": "Nazar", "age": 22, "gender": "male"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student9Path = path.join(secondGroupPath, 'ira.json')
fs.writeFile(student9Path, '{"name": "Ira", "age": 18, "gender": "female"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student10Path = path.join(secondGroupPath, 'nastja.json')
fs.writeFile(student10Path, '{"name": "Nastja", "age": 29, "gender": "female"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student11Path = path.join(secondGroupPath, 'ostap.json')
fs.writeFile(student11Path, '{"name": "Ostap", "age": 39, "gender": "male"}', (err) => {
    if (err) {
        console.log(err)
    }
})
let student12Path = path.join(secondGroupPath, 'kira.json')
fs.writeFile(student12Path, '{"name": "Kira", "age": 25, "gender": "female"}', (err) => {
    if (err) {
        console.log(err)
    }
})

//Task1

fs.readdir(generalGroupPath, (err, groups) => {// читаєм директорію
    if (err) {
        console.log('====================')
        console.log(err)
        console.log('=====================')
        return
    }
    groups.forEach(groupe => {
        console.log(groupe) // get each group
        fs.readdir(path.join(generalGroupPath, groupe), (err, students) => {
            console.log(students) // get each student in group
            for (const student of students) {
                if (groupe === 'first group') {
                    fs.rename(
                        path.join(generalGroupPath, 'first group', student), path.join(generalGroupPath, 'second group', student), err => {
                        })
                } else {
                    fs.rename(
                        path.join(generalGroupPath, 'second group', student), path.join(generalGroupPath, 'first group', student), err => {
                        })
                }

            }
        })
    })

})

//Task 2
fs.readdir(generalGroupPath, (err, groups) => {// читаєм директорію
    console.log('GRs', groups)
    if (err) {
        console.log('====================')
        console.log(err)
        console.log('=====================')
        return
    }
    groups.forEach(groupe => {
        console.log('GR: ', groupe)
        fs.readdir(path.join(generalGroupPath, groupe), (err, students) => {
            console.log('STS: ', students)

            for (const student of students) {
                fs.readFile(path.join(generalGroupPath, groupe, student), (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    console.log(data.toString());
                    let eachStudent = JSON.parse(data.toString())
                    if (eachStudent.gender === "male") {
                        fs.rename(
                            path.join(generalGroupPath, groupe, student), path.join(__dirname, 'boys', student), err => {
                            })
                    } else {
                        fs.rename(
                            path.join(generalGroupPath, groupe, student), path.join(__dirname, 'girls', student), err => {
                            })
                    }

                })
            }
        })
    })


})