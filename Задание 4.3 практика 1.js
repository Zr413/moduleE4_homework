const myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

function printOwnProps(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop + ': ' + obj[prop]);
        }
    }
}

printOwnProps(myObj)