const Lazy = require('lazy.js');
const people = [
    { lastName: 'aaaa' },
    { lastName: 'ccc' },
    { lastName: 'Smith' },
]
var result = Lazy(people)
    .find(function(name) {
        return name.lastName === 'Smith'
    })
result.aaa = 33

console.log(people);
