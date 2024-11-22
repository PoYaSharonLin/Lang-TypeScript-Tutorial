"use strict";
var greet = function () {
    console.log('Lets start the adventure');
};
greet();
var before_experience = 0;
var levelup = function (monster, count) {
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
levelup("slimes", 100);
