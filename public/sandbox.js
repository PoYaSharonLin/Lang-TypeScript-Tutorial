"use strict";
var HeadNorth = function (x, dis) { return x + dis; };
var HeadSouth = function (x, dis) { return x - dis; };
var HeadEast = function (y, dis) { return y + dis; };
var HeadWest = function (y, dis) { return y - dis; };
console.log("HeadNorth, x = 10, distance = 100");
console.log("End point: x =" + HeadNorth(10, 100));
console.log("HeadWest, y = -20, distance = 300");
console.log("End point: y =" + HeadWest(-20, 300));
