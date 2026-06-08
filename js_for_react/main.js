function main(){
    console.log("test");
    var x = 10;
    console.log("x:",x);
    if(true){
        var y = 30;
        let x = 20;
        x = 30;
        console.log("x:",x);
    }
    console.log("x:",x); 
    console.log("y:",y);
    const book = {title: "Hello World"}
    book.title = "Hello World 2";
    console.log(book);
}
main();
console.log("Functions")
function addTraditional(a,b){
    return a+b;
}
const add = (a,b) => a+b;
console.log(addTraditional(1,3));
console.log(add(1,5));

console.log("Array:")
const ids = [1,2,3,4,5];
ids.forEach(id => {
    id++;
    console.log(id);
} );
console.log("Rest operator: ");
function test(firstArgument, ...otherArguments){
    console.log(firstArgument);
    console.log(otherArguments);
}
test("Peter", "Max", "Claudia", "Mitch");
console.log("Spread operator: ");

const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "melon"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);