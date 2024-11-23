// movement operations
interface MovementOperation {
    (AxisCoordinate: number, distance: number): number;
}

const HeadNorth: MovementOperation = (x,dis) => x + dis
const HeadSouth: MovementOperation = (x,dis) => x - dis
const HeadEast: MovementOperation = (y,dis) => y + dis
const HeadWest: MovementOperation = (y,dis)=> y - dis

console.log("HeadNorth, x = 10, distance = 100")
console.log("End point: x =" + HeadNorth(10,100))

console.log("HeadWest, y = -20, distance = 300")
console.log("End point: y =" + HeadWest(-20,300))