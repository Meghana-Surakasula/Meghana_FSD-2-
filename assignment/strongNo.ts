let numb= 145;
let temp = numb;
let sum = 0;

while (numb> 0) {
    let digit = numb % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }

    sum = sum + fact;
    numb = Math.floor(numb / 10);
}

if (sum == temp) {
    console.log("Strong number");
} else {
    console.log("Not a Strong number");
}
