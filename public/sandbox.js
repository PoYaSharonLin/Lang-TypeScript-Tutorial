"use strict";
var goblin_55688 = {
    name: 55688,
    height: 103,
    weight: 33,
};
console.log(goblin_55688);
function fightMonster(monster) {
    console.log("\u5C0D\u6297 ".concat(monster, "..."));
}
fightMonster("slime"); // OK
// fightMonster("tiger"); // 錯誤：'tiger' 不屬於 Monster 的選項
