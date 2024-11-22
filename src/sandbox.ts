//1. 幫型別取別名
type goblin = {
    name: string | number;
    height: number;
    weight: number;
};

const goblin_55688: goblin = {
    name: 55688,
    height: 103,
    weight: 33,
};
console.log(goblin_55688)

//2. 限縮型別的變數選項
type Monster = "slime" | "hobby" | "goblin";

function fightMonster(monster: Monster) {
    console.log(`對抗 ${monster}...`);
}

fightMonster("slime"); // OK
// fightMonster("tiger"); // 錯誤：'tiger' 不屬於 Monster 的選項
