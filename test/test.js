'use strict';
var expect = require('chai').expect;
var pc = require('../dist/index.js');

function roundNumber (number, precision) {
    return parseFloat(number.toFixed(precision));
}

describe('Point Calculation tests', () => {

    // distance
    it('should calculate the distance (linear)', () => {
        var result = pc.distance({x: 2, y: 2}, {x: 2, y: 4});
        expect(result).to.equal(2);
    });

    it('should calculate the distance (diagonal)', () => {
        var result = pc.distance({x: 2, y: 2}, {x: 5, y: 6});
        expect(result).to.equal(5);
    });

    it('should calculate the distance -20 23, -15 68', () => {
        var result = pc.distance({x: -20, y: 23}, {x: -15, y: 68});
        expect(roundNumber(result, 2)).to.equal(45.28);
    });

    it('should calculate the distance 30 37, 79 -51', () => {
        var result = pc.distance({x: 30, y: 37}, {x: 79, y: -51});
        expect(roundNumber(result, 2)).to.equal(100.72);
    });
    
    it('should calculate the distance -69 63, 57 11', () => {
        var result = pc.distance({x: -69, y: 63}, {x: 57, y: 11});
        expect(roundNumber(result, 2)).to.equal(136.31);
    });

    // angle
    it('should calculate the angle -90', () => {
        var result = pc.angle({x: 0, y: 0}, {x: 0, y: 11});
        expect(result).to.equal(-Math.PI/2);
    });

    it('should calculate the angle 90', () => {
        var result = pc.angle({x: 0, y: 11}, {x: 0, y: 0});
        expect(result).to.equal(Math.PI/2);
    });

    it('should calculate the angle 30 37, 79 -51', () => {
        var result = pc.angle({x: 30, y: 37}, {x: 79, y: -51});
        expect(roundNumber(result, 2)).to.equal(2.08);
    });

    it('should calculate the angle -69 63, 57 11', () => {
        var result = pc.angle({x: -69, y: 63}, {x: 57, y: 11});
        expect(roundNumber(result, 2)).to.equal(2.75);
    });

});