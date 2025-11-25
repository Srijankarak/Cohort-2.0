// JSON = Javascript Object Notation

const users ={
    name:"Srijan Karak",
    age:22,
    isDeveloper:true,
    skills:["javascript","python","c++","java"]
      
}

console.log(users.name);

const users1 = '{name:"Srijan Karak",age:22,isDeveloper:true,skills:["javascript","python","c++","java"]}';

console.log("JSON String:",users1[0]);


//JSON.parse
//JSON.stringify
const user = {
    name:"Srijan Karak",
    gender:"male"
}

const finalString = JSON.stringify(user);
console.log(finalString[0]);//gives the string format of the object