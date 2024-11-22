"use strict";
var greet = function () {
    console.log('Lets start the adventure');
};
greet();
var experience_calculation = function (monster, count) {
    var experienceRates = {
        slimes: 1,
        hobbies: 3,
        goblins: 10,
    };
    var experience = experienceRates[monster] * count;
    console.log(monster);
    console.log(count);
    console.log('Experience gained:', experience);
    return experience;
};
experience_calculation("slimes", 100);
