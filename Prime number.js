let a = 12
let b = 14

let count1 = 0
    for (let i = 1; i<=a; i++){
        if (a%i==0){
            count1++
        }
    }
    let count2=0
    for (let j = 1; j<=b; j++){
        if (b%j==0){
            count2++
        }
    }
    if ((count1==2)&&(count2==2)){
        console.log("True")
    }else{
        console.log("False")
    }