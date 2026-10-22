'use strict';
var expect = require('chai').expect;
var Point = require('../dist/models/point.js').Point;

describe('Point model tests', () => {
    it('should initialize with given x and y', () => {
        var p = new Point(10, 20);
        expect(p.x).to.equal(10);
        expect(p.y).to.equal(20);
    });

    it('should allow negative coordinates', () => {
        var p = new Point(-5, -15);
        expect(p.x).to.equal(-5);
        expect(p.y).to.equal(-15);
    });

    it('should allow zero coordinates', () => {
        var p = new Point(0, 0);
        expect(p.x).to.equal(0);
        expect(p.y).to.equal(0);
    });
});
