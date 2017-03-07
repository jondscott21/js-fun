// 1.
function personConstructor(name) {
    personConstructor = {};
    personConstructor = {
        name: name,
        distance_travelled: 0,
        say_name: function () {
            console.log(name);
        },
        say_something: function (saying) {
            console.log(name + " says: " + saying);
        },
        walk: function() {
            console.log(name + ' is walking');
            personConstructor.distance_travelled += 3;
        },
        run: function() {
            console.log(name + ' is running');
            personConstructor.distance_travelled += 10;
        },
        crawl: function() {
            console.log(name + ' is crawling');
            personConstructor.distance_travelled += 1;
        },
    };
}

// 2.
var count = 0;
function ninjaConstuctor(name, cohort) {
    ninja = {};
    ninja = {
        name: name,
        cohort: cohort,
        beltLevel: 'yellow-belt',
        levelUp: function () {
            count +=1;
            if (count === 1) {
                ninja.beltLevel = 'red-belt';
            }
            if (count > 1) {
                ninja.beltLevel = 'black-belt';
            }
        },
    }


}
ninjaConstuctor('jon', 'san jose');
console.log(ninja.beltLevel);
ninja.levelUp();
console.log(ninja.beltLevel);
ninja.levelUp();
console.log(ninja.beltLevel);