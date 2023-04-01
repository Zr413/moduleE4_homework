function checkProperty(obj, propName) {
    return propName in obj;
}

const myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(checkProperty(myObj, 'name')); // true
console.log(checkProperty(myObj, 'gender')); // false
