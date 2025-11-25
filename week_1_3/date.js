// global class = present in javascript by default
// Date class = to work with date and time

const currentDate = new Date();// creates a new Date object with the current date and time

console.log("Current Date and Time:", currentDate);
console.log("Current Date and Time:", currentDate.toString());// toString() method gives the date in string format
console.log(currentDate.getDate()); // day of the month
console.log(currentDate.getMonth()+1); // as months are counted from 0 to 11 ( 0 based indexing)
console.log(currentDate.getFullYear()); // year
console.log(currentDate.getHours()); // hours
console.log(currentDate.getMinutes()); // minutes
console.log(currentDate.getSeconds()); // seconds   
console.log(currentDate.getMilliseconds()); // milliseconds
console.log(currentDate.getDay()); // day of the week (0-6) 0 = Sunday , 1 = Monday

const specialDate = new Date();
console.log("Time in  miliseconds since 1970:", specialDate.getTime()); // epoch timestamp



function calculateSum(){
    let a = 0;
    for(let i=0 ; i<10000000; i++){
        a = a+i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();
console.log("The differnce is",afterTimeInMs - beforeTimeInMs);// this actualy gives the time taken to execute the function in milliseconds - the calculateSum function
