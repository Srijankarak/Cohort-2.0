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
