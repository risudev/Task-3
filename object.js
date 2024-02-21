const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length){
        return false;
    }
    for(const obj1Keys of obj2Keys){
        if(obj1[obj1Keys] !== obj2[obj2Keys]){
            return false;
        }
    }
    return true;
}


const obj1 = {name: "person1", age: 20};
const obj2 = {age : 20, name: "person1"};
console.log(obj1 === obj2);
