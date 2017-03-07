// 1. Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
function runningLogger() {
    console.log('I am running')
}
runningLogger();

// 2. Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result.
// Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function  multiplyByTen(num) {
    num = num * 10;
    console.log(num);
    return num;
}
multiplyByTen(5);

// 3. Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne() {
    return "This makes one";
}
stringReturnOne();
function stringReturnTwo() {
    return "This makes two";
}
stringReturnTwo();

// 4. Medium: Write a function named caller that has one parameter.
// If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
function caller(val) {
    if (typeof val == 'function') {
        val();
    }
    return
}
caller(multiplyByTen(80));

// 5.Medium: Write a function named myDoubleConsoleLog that has two parameters,
// if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(param1, param2) {
    if (typeof param1 == 'function' && typeof param2 == 'function') {
        console.log(param1, param2);
    }
}
myDoubleConsoleLog(stringReturnOne(), stringReturnTwo())

// 6. Hard: Write a function named caller2 that has one parameter.
// Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function.
// (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”.
// Invoke this function by passing it myDoubleConsoleLog
function caller2(param) {
    console.log('starting');
        setTimeout(function () {
            console.log('ending?')
        }, 2000);
        return "interesting"

}

caller2(myDoubleConsoleLog())