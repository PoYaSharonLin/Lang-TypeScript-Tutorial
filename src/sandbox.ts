
let greet = () => {
  console.log('Lets start the adventure');
}
greet()

type Monster = "slimes" | "hobbies" | "goblins";

const experience_calculation = (monster: Monster, count: number): number => {
    const experienceRates: Record<Monster, number> = {
        slimes: 1,
        hobbies: 3,
        goblins: 10,
    };

    const experience = experienceRates[monster] * count;

    console.log(monster)
    console.log(count)
    console.log('Experience gained:', experience);
    return experience
};
experience_calculation("slimes",100)