function findIndexOf(str , target){
    console.log("Original String:",str);
    console.log("Index:",str.indexOf(target));
    console.log("Last Index:",str.lastIndexOf(target));
}

findIndexOf("hello world world" , "world");

//length , lastIndexOf , indexOf    - we learn these three functions of Javascript

//slice
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After Slice:", str.slice(start, end));
}

getSlice("hello world", 0, 5);


//substring
const value = "JavaScript is awesome";
const subStr = value.substring(0, 12);
console.log("Original String:", value);
console.log("Substring (0,12):", subStr);

function cuIT(str , startIndex , endIndex){
    let newStr = "";
    for(let i=0 ; i<str.length ; i++){
        if(i>=startIndex && i<endIndex){
            newStr += str[i];
        }
    }
    return newStr;      
}

const val = "Srijan Karak is a OG Developer";
let ans2 = val.slice(2,5);
console.log(ans2);
let ans3 = cuIT(val , 2 , 5);
console.log(ans3);

// replace string
const str = "Hello World";
console.log(str.replace("World","javascript"));
console.log(str.replace("something else which is not present","javascript"));

//split string
const sentence = "This is a sample sentence";
const words = sentence.split(" ");
console.log("Original Sentence:", sentence);
console.log("Splitted Words:", words); // the output is an array

//trim
const w ="     srijan karak     ";
console.log("Original String with spaces:", `"${w}"`);
console.log("Trimmed String:", `"${w.trim()}"`);

//toUpperCase and toLowerCase
const mixedCase = "harkirat Singh";
console.log("Original String:", mixedCase);
console.log("To Upper Case:", mixedCase.toUpperCase());
console.log("To Lower Case:", mixedCase.toLowerCase());

//numbers
function explainParseInt(v) {
    console.log("Original Value:", v);
    console.log("Parsed Integer:", parseInt(v));
}

//Example Usage for parseInt
explainParseInt("123");
explainParseInt("45.67xyz");
explainParseInt("abc123");
explainParseInt("   89   ");

//float
function explainParseIntFloat(b) {
    console.log("Original Value:", b);
    console.log("Parsed Float:", parseFloat(b));
}
explainParseIntFloat("123.45");
explainParseIntFloat("67.89abc");
explainParseIntFloat("abc45.67");
explainParseIntFloat("   12.34   ");

// push , pop , shift , Unshift , concat
const initialArr = [1, 2, 3];
const secondArr =  [4 , 5 , 6];
initialArr.push(4);
console.log("After Push:", initialArr);// see even after arr is const but still we push new element here
console.log(initialArr.concat(secondArr)); // concat does not change the original array
secondArr.pop();
console.log("After Pop:", secondArr);
secondArr.shift();
console.log("After Shift:", secondArr);
// shift means removing the first element of the array  
secondArr.unshift(10);
console.log("After Unshift:", secondArr);
// unshift means adding element at the starting of the array   



// forEach
const arrForEach = [10, 20, 30, 40, 50];

function logThing(k){
    console.log(k);
}
// for each takes a function as an argument and calls that function for every element of the array
arrForEach.forEach(logThing); // this also a type of callback function

///callbacks , map , filter, find , sort - in upcoming lessons

// Level - 2


const dog = {
    name: "doggie",
    legCount: 4,
    speaks: "bhow bhow"
}

const cat ={
    name: "cat",
    legCount: 4,
    speaks: "meow meow"
}

function animalDetails(animal){
    return "animal " + animal.name + " " + animal.speaks + " with " + animal.legCount + " legs";
}
// animal x bark bark with 2 legs

console.log(animalDetails(dog));
console.log(animalDetails(cat));

// 38:00