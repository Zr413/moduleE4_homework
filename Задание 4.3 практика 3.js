function createEmptyObject() {
    return Object.create(null);
}

const myObj = createEmptyObject();
console.log(myObj); // {}
console.log(Object.getPrototypeOf(myObj)); // null
