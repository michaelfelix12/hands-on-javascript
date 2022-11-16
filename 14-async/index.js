//synchronous
console.log('start----')
console.log('processing')
console.log('finish----')

//asynchronous
console.log('start----')
setTimeout(() => {
    console.log('processing')
    
},1000)
console.log('finish----')

//synchronous
const sayHello = () => {
    console.log('log from sayHello')
    return 'Hello'
}
console.log('start----')
console.log(sayHello())
console.log('finish----')


//asynchronous
// const sayHelloAsync = () => {
//     console.log('log from sayHelloAsync')
//     name = null
//     setTimeout(() => {
//         name = 'Morty'
//         name = `Hi, this is ${name}`
//     }, 1000)
//     return name
// }
// console.log('start----')
// console.log(sayHelloAsync())
// console.log('finish----')

//asynchronous - callback
const sayHelloAsync = (callback) => {
    console.log('log from sayHelloAsync')
    name = null
    setTimeout(() => {
        name = 'Morty'
        callback(`Hi, this is ${name}`)
    }, 1000)
}

function sayHelloCallBack(name) {
    console.log(name)
}

console.log('start----')
sayHelloAsync(sayHelloCallBack)
console.log('finish----')