let person = {
    name: "pai",
    age: 21,
    eyecolor: "black",
    fullname: () => {
        return `${person.name} : ${person.age},`;
    },
};

const x = person;
x.age = 21;
console.log(person.age);
console.log(x.fullname());

function addFn(...num) {
    let sum=0;
    for(value of num) sum += value;
    return sum;
}
console.log(addFn(10,20,30,40));

//destructuring
const [a,b] = [10,20,30];
console.log(b);

const {name: rName,age} = person;
console.log(rName);
