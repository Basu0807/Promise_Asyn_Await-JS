// Question-1

function totalsum(num1, num2){
    return num1+num2
}

function fatherAge(boy1,boy2,sum){
    console.log(`The sum of ${boy1}'s age and ${boy2}'s age is ${sum}`)
}

console.log(fatherAge("Rahul","John", totalsum(20,30)));


// Question-2

setTimeout(() => {
    console.log("1")
    setTimeout(() => {
        console.log("2") 
        setTimeout(() => {
            console.log("3")
            setTimeout(() => {
                console.log("4")
                setTimeout(() => {
                    console.log("5")
                    setTimeout(() => {
                        console.log("6")
                        setTimeout(() => {
                            console.log("7")
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);

// question-3
function printNumbersWithDelay() {
    let number = 1;
  
    function printNumber() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(number);
          resolve();
        }, number * 1000);
      });
    }
  
    function iterate() {
      if (number <= 7) {
        printNumber()
          .then(() => {
            number++;
            iterate();
          });
      }
    }
  
    iterate();
  }
  
  printNumbersWithDelay();
// question-4

let condition ="yes";
function promise(p){
 return new Promise((res,rej)=>{
    if(p==="yes"){
        res('Promise Resolved')
    }
    else{
        rej('Promise Rejected')
    }
})
}

promise(condition).then((good)=>console.log(good)).catch((bad)=>console.log(bad))

// question-5

function callback(value){
    return value*2.2
}
function multiply(kg,lbs){
    console.log(`${kg}kg is equal to ${lbs}lbs`)
}
multiply(5,callback(5))

// question-6
function op1(callback){
    setTimeout(()=>{
        console.log("Done1")
        callback()
    },1000)
}

function op2(callback){
    setTimeout(()=>{
        console.log("Done2")
        callback()
    }, 1000)
}
function op3(callback){
    setTimeout(()=>{
        console.log("Done3")
        callback()
    }, 1000)
}

op1(()=>{
    op2(()=>{
        op3(()=>{
            console.log("Hurray!!!")
        })
    })
})

// question-7
let interview="pass"
function jobDone(result){
    return new Promise((res, rej)=>{
        if(result="pass"){
            res("You have cleared the interview")
        }
        else{
            rej("Sorry better luck next time")
        }
    })
}
jobDone(interview).then((condition1)=>console.log(condition1)).catch((condition2)=>console.log(condition2))

// question-8
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function performOperations() {
    console.log('Operation 1');
    await delay(1000);
    console.log('Operation 2');
    await delay(2000);
    console.log('Operation 3');
  }
  
  performOperations();

//   question-9

function result(marks){
    return new Promise((res, rej)=>{
        if(marks>50){
            res('You have cleared the exam')
        }
        else{
            rej('You have not cleared the exam')
        }
    })
}
    const output = new Promise((res,rej)=>{
        if(true){
            res('Got job')
        }
        else{
            rej('Try next time')
        }
    })


Promise.all([result(60), interview]).then((yes)=>console.log(yes)).catch((no)=>console.log(no));



