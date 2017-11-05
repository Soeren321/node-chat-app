// Jan 1st 1970 00:00:00 am
// let date = new Date()
// console.log(date.getMonth())

const moment = require('moment')

let someTimeStamp = moment().valueOf()
console.log(someTimeStamp)

let createdAt = 1234
let date = moment(createdAt)
console.log(date.format('h:mm a'))