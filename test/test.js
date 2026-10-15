'use strict';
var expect = require('chai').expect;
var pc = require('../dist/index.js');

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
        expect(result).to.be.closeTo(45.28, 0.01);
    });

    it('should calculate the distance 30 37, 79 -51', () => {
        var result = pc.distance({x: 30, y: 37}, {x: 79, y: -51});
        expect(result).to.be.closeTo(100.72, 0.01);
    });
    
    it('should calculate the distance -69 63, 57 11', () => {
        var result = pc.distance({x: -69, y: 63}, {x: 57, y: 11});
        expect(result, 2).to.be.closeTo(136.31, 0.01);
    });

    // angle
    it('should calculate the angle -90 degrees', () => {
        var result = pc.angle({x: 0, y: 0}, {x: 0, y: 11});
        expect(result).to.equal(-Math.PI/2);
    });

    it('should calculate the angle 90 degrees', () => {
        var result = pc.angle({x: 0, y: 11}, {x: 0, y: 0});
        expect(result).to.equal(Math.PI/2);
    });

    it('should calculate the angle 30 37, 79 -51', () => {
        var result = pc.angle({x: 30, y: 37}, {x: 79, y: -51});
        expect(result).to.be.closeTo(2.08, 0.01);
    });

    it('should calculate the angle -69 63, 57 11', () => {
        var result = pc.angle({x: -69, y: 63}, {x: 57, y: 11});
        expect(result).to.be.closeTo(2.75, 0.01);
    });

    // translate point
    it('should translate the point by 5 at 90 degrees', () => {
        var result = pc.translatePoint({x: 0, y: 0}, 5, Math.PI / 2);
        expect(result.x).to.be.closeTo(0, 0.00001);
        expect(result.y).to.equal(5);
    });

    it('should translate the point by 5 at 45 degrees', () => {
        var result = pc.translatePoint({x: 0, y: 0}, 5, Math.PI / 4);
        expect(result.x).to.be.closeTo(3.535, 0.001);
        expect(result.y).to.be.closeTo(3.535, 0.001);
    });

    it('should translate the point by 5 at 45 degrees', () => {
        var result = pc.translatePoint({x: 0, y: 0}, 5, Math.PI / 4);
        expect(result.x).to.be.closeTo(3.535, 0.001);
        expect(result.y).to.be.closeTo(3.535, 0.001);
    });

    it('should translate the point by -5 at 30 degrees', () => {
        var result = pc.translatePoint({x: 0, y: 0}, -5, Math.PI / 6);
        expect(result.x).to.be.closeTo(-4.33, 0.001);
        expect(result.y).to.be.closeTo(-2.5, 0.001);
    });

    // rotate point

    it('should rotate the point around 0,0 by 90 degrees', () => {
        var result = pc.rotatePoint({x: 5, y: 0}, {x: 0, y: 0}, Math.PI / 2);
        expect(result.x).to.be.closeTo(0, 0.001);
        expect(result.y).to.be.closeTo(-5, 0.001);
    });

    it('should rotate the point around 0,0 by 30 degrees', () => {
        var result = pc.rotatePoint({x: 5, y: 0}, {x: 0, y: 0}, Math.PI / 6);
        expect(result.x).to.be.closeTo(4, 0.001);
        expect(result.y).to.be.closeTo(-2, 0.001);
    });

    it('should rotate the point around 30,24 by 120 degrees', () => {
        var result = pc.rotatePoint({x: 34, y: 25}, {x: 30, y: 24}, 2 * Math.PI / 3);
        expect(result.x).to.be.closeTo(29, 0.001);
        expect(result.y).to.be.closeTo(20, 0.001);
    });

    // find point along line

    it('should find a point at distance 3 along 0,0 0,5', () => {
        var result = pc.findPointOnLine({x: 0, y: 0}, {x: 0, y: 5}, 3);
        expect(result.x).to.be.closeTo(0, 0.001);
        expect(result.y).to.be.closeTo(3, 0.001);
    });

    it('should find a point at distance 3 along 0,0 3,4', () => {
        var result = pc.findPointOnLine({x: 0, y: 0}, {x: 3, y: 4}, 3);
        expect(result.x).to.be.closeTo(1.8, 0.001);
        expect(result.y).to.be.closeTo(2.4, 0.001);
    });

    it('should find a point at distance 3 along 34,25 30,24', () => {
        var result = pc.findPointOnLine({x: 34, y: 25}, {x: 30, y: 24}, 3);
        expect(result.x).to.be.closeTo(31.09, 0.001);
        expect(result.y).to.be.closeTo(24.272, 0.001);
    });

});