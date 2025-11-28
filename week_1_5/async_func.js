function findSum(n){
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}
//busy waiting
function syncSleep(){
    let a = 1;
    for(let i = 0; i < 1e9; i++){
        a += i;
    }
}

findSumTill100();
syncSleep();
// setTimeout(findSumTill100, 1000)
console.log("Scheduled findSumTill100 to run after 1 second.");