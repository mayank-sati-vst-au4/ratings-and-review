function fibbo(num1,num2,numbers){
    let a = num1;
    let b = num2;
    console.log(a,b,numbers);
    for(let i=0;i<numbers;i++){
        let c = a+b;
        a=b;
        b=c;
        console.log(a,b);
    }

    console.log("final numbers", a,b);
    
}
console.log(fibbo(0,1,5));