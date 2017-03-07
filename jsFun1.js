//  1.  Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i = 0; i < x.length-1; i++) {
    console.log(x[i]);
}
//  2. Add a new value (100) in the array x using a push method.
x.push(100);
//  3. Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
y = ['hello', 'world', 'JavaScript is Fun'];
x = x + y;
console.log(x);
//  4. Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var sum = 0;
for (var j = 1; j <= 500; j++) {
    sum += j;
}
console.log(sum);
//  5.  Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it.
var arr1 = [1, 5, 90, 25, -3, 0];
var min = arr1[0];
for (var k = 0; k < arr1.length; k++) {
    if ( min < arr1[k]) {
        min = arr1[k];
    }
}
//  6. Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it.
var arr2 = [1, 5, 90, 25, -3, 0];
var total = 0;
for (var l = 0; l < arr2.length; l++) {
    total += arr2[l];
}
console.log(total/arr2.length);
//  7.
var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
};
for (var key in newNinja) {
    console.log(key);
    console.log(newNinja[key]);
}