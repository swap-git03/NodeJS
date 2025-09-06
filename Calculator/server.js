const { settings } = require("./config/settings");


console.log(settings.port)

const {addition, substract, divi, multi} = require('./math')

let n1 =10
let n2=20

sum = addition(n1,n2)
subs = substract(n2, n1)
multi = multi (n1,n2)
divi = divi(n2,n1)

console.log(`Addition of ${n1} and ${n2} is ${sum}`)
console.log(`Addition of ${n2} from ${n1} is ${subs}`)
console.log(`Multiplication of ${n2} from ${n1} is ${multi}`)
console.log(`Division of ${n2} from ${n1} is ${divi}`)