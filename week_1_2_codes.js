const users =[1 , 2 , 3 , 4];
const usersname =["srijan","sayan","rohan","ayan"];

const allUsers =[{
    firstName:"srijan",
    lastName:"karak",
    gender:"male",
    age:24
},{
    firstName:"sayan",
    lastName:"chakraborty",
    gender:"male",
    age:23  
},{
    firstName:"rohan",
    lastName:"das",
    gender:"male",
    age:25
},{
    firstName:"ayan",
    lastName:"gupta",   
    gender:"male",
    age:22
},{
    firstName:"sagarika",
    lastName:"mukherjee",       
    gender:"female",
    age:24  
},{
    firstName:"smriti",
    lastName:"roy",
    gender:"female",    
    age:23
}];

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i].gender==="male"){
        console.log(`Mr. ${allUsers[i].firstName} ${allUsers[i].lastName}, Age: ${allUsers[i].age}`);
    }
}