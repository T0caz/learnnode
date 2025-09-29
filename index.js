let time = Date.now();
let num = 0;
while(Date.now() < time+1000) {
    num++;
}
console.log(num);

num = 10 ;
while(num < 10) {
    console.log('WHILE');
}

do {
    console.log ('DO');
} while(num < 10);

function recursion(num) {
    if(num<10) {
        console.log(num);
        recursion(num+1);
    }
}

recursion