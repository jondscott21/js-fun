// 1. Create a simple for loop that sums all the integers between x and y (inclusive).
function sumInts(x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum += i;
    }
    console.log(sum);
}
sumInts(4, 10); //test call

// 2. Have it console log the final sum.Write a loop that will go through an array, find the minimum value, and then return it.
function minVal(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minVal([1, 4, -5, 10, 90, -1, 0])); //test

// 3.Write a loop that will go through an array, find the average of all of the values, and then return it
function avgVal(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(avgVal([1, 2, 3, 4])); //test

// 4. Rewrite these 3 as anonymous functions assigned to variables.
var sumInts2 = function(x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum += i;
    }
    console.log(sum);
};
sumInts2(4, 10);

var minVal2 = function (arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minVal2([1, 4, -5, 10, 90, -1, 0]));

var avgVal2 = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(avgVal2([1, 2, 3, 4]));

// 5. Rewrite these as methods of an object

function Methods() {
    this.sumInts = function (x, y) {
        var sum = 0;
        for (var i = x; i <= y; i++) {
            sum += i;
        }
        console.log(sum);
    };
    sumInts(4, 10);
    this.minVal = function (arr) {
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        console.log(min);
        return min;
    };
    this.avgVal = function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum/arr.length);
        return sum/arr.length;
    }
}

thing = new Methods();
thing.sumInts(5, 7);
thing.minVal([2, 4, 7]);
thing.avgVal([6, 7, 3]);

// 6.
var person = {}
person = {
    name: 'Jonathan',
    distance_travelled: 0,
    say_name: function () {
        console.log(person.name);
    },
    say_something: function (saying) {
        console.log(person.name + " says: " + saying);
    },
    walk: function() {
        console.log(person.name + ' is walking');
        person.distance_travelled += 3;
    },
    run: function() {
        console.log(person.name + ' is running');
        person.distance_travelled += 10;
    },
    crawl: function() {
        console.log(person.name + ' is crawling');
        person.distance_travelled += 1;
    },
};
person.walk();
person.say_name();
person.say_something('wow');
person.walk();
person.run();
person.crawl();
console.log(person.distance_travelled);
