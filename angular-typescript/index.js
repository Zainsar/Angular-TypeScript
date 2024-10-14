console.log("Hi Zain \n");
var name = "Zain Sarfraz";
console.log("print Name");
console.log(name + "\n");
console.log("print Name IndexOf");
console.log(name.indexOf("r \n"));
console.log("arr of object \n");
var arr = [];
var obj = {
    name: "tayyaba",
    age: 20
};
arr.push(obj);
console.log(JSON.stringify(arr, null, 2) + "\n");
var MyNumbers = [26, 34, 5, 29, 20];
console.log("print 3 Index of Array");
console.log(MyNumbers[3] + "\n");
console.log("print complete Array");
console.log(MyNumbers);
console.log("\n map");
//Map
MyNumbers.map(function (arr, i) {
    console.log(i + " => " + arr);
});
console.log("\n foreach loop");
//foreach
MyNumbers.forEach(function (item, i) {
    console.log(i + " => " + item);
});
console.log("\n for loop");
//for
for (var index = 0; index < MyNumbers.length; index++) {
    var element = MyNumbers[index];
    console.log(index + " => " + element);
}
