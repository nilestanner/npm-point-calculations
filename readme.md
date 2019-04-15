# Point Calculation

[![CircleCI](https://circleci.com/gh/nilestanner/npm-point-calculations.svg?style=svg)](https://circleci.com/gh/nilestanner/npm-point-calculations)

A simple library that provides functions for cartesian point calculations.

## Install
Install the package
```
npm i point-calculation
```

Import the module
```
var pc = require('point-calculation');
```

## Supported Calculations

Many calculation use a simple class of `Point`. The structure of this class is as follows:
```
{
    x: number,
    y: number
}
```

### Distance
Finds the distance between two points

`distance(point1, point2);`

Params
* point1: *required* __Point__
* point2: *required* __Point__

```
var pc = require('point-calculation');
var dist = pc.distance({x: 2, y: 2}, {x: 2, y: 4});
console.log(dist); // 2
```

### Angle
Finds the angle of the line that passes through both of the points. Angle is returned in Radians.

`angle(point1, point2);`

Params
* point1: *required* __Point__
* point2: *required* __Point__

```
var pc = require('point-calculation');
var angle = pc.angle({x: 30, y: 37}, {x: 79, y: -51});
console.log(angle); // ~2.08
```

### Rotate Point
Rotates a point around another point by a given angle.

`rotatePoint(rotatingPoint, centerPoint, angle);`

Params
* rotatingPoint: *required* __Point__ This is where the point is before it is rotated.
* centerPoint: *required* __Point__ The rotatingPoint is rotated around this point
* angle *required* __angle in radians__ 

```
var pc = require('point-calculation');
var point = pc.rotatePoint({x: 5, y: 0}, {x: 0, y: 0}, Math.PI / 6);
console.log(point); // {x: 4, y: -2}
```

### Translate Point
Moves point a given distance and angle;

`translatePoint(point, distance, angle);`

Params
* point: *required* __Point__ 
* distance: *required* __number__
* angle: *optional* __angle in radians__ (defaults to 0)

```
var pc = require('point-calculation');
var point = pc.translatePoint({x: 0, y: 0}, 5, Math.PI / 4);
console.log(point); // ~{x: 3.535, y: 3.535}
```

### Find Point on Line
Returns a point between to points as a given distance

`findPointOnLine(startPoint, endPoint, distanceFromStart)`

Params
* startPoint: *required* __Point__
* endPoint: *required* __Point__
* distanceFromStart: *required* __number__

```
var pc = require('point-calculation');
var point = pc.findPointOnLine({x: 0, y: 0}, {x: 3, y: 4}, 3);
console.log(point); // ~{x: 1.8, y: 2.4}
```
