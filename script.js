console.log("Function ");


function printNo() {

    for (i = 1; i <= 100; i++) {
        console.log("No:", i);

    }

}
printNo(); //Function calling

console.log("Arrow function");

let print = () => {
    for (j = 0; j <=100; j++) {
        console.log("No:", j);
    }
}
print(); //Function calling
