let a = 10
let b = 12

let count1 = 0
    for (let i = 1; i<=a; i++){
        if (i%a==0){
            count1++
        }
    }
    let count2=0
    for (let j = 1; j<=b; j++){
        if (j%b==0){
            count2++
        }
    }
    if ((count1>2)&&(count2>2)){
        console.log("True")
    }else{
        console.log("False")
    }