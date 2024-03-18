const number =  {
    name:'Juyel',
    village: 'Danajpur',
    Roll : 501246,
    studyIn :'Pirganj Polytechnic institute',
    serialNo : 'some and the village some have error and sometime',
    mobile : 'Nokia', 

}

const stringify = JSON.stringify(number)
// console.log(number)
// console.log(stringify);
const numberJSON = JSON.parse(stringify);
// console.log(numberJSON);
const value = number.mobile
// console.log(value);
// console.log(number.studyIn)

// fetch link add th JSON 

 const isArray = [12,32,34,54,56,76,78];
//  console.log(isArray);
// console.log(isArray);
const isArrayValue = isArray.pop(78)
console.log(isArray);
// const isArrayDeleteValue = isArray.pop(12);
// console.log(isArrayDeleteValue);
