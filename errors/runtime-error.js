const fruits = ['apple', 'berry', 'cherry'];
// thi is undifined because the value of 10 does't exist , also remember index starts counting from 0
// so if we actually code 
// const uppperFruit = fruits[2].toUpperCase(); (this will work)
const upperFruit = fruits[10].toUpperCase();

console.log(upperFruit);
