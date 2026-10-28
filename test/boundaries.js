'use strict';
const expect = require('chai').expect;
const pc = require('../dist/index.js');
const Point = require('../dist/models/point.js').Point;

describe('Point model boundaries', () => {
    for (const [x, y] of [[10, 20], [-5, -15], [0, 0]]) {
        it(`constructs a point at ${x}, ${y}`, () => {
            const point = new Point(x, y);
            expect(point.x).to.equal(x);
            expect(point.y).to.equal(y);
        });
    }
});

describe('Point calculation boundaries', () => {
    const lineCases = [
        ['zero distance', {x: 10, y: 10}, {x: 13, y: 14}, 0, {x: 10, y: 10}],
        ['full distance', {x: 10, y: 10}, {x: 13, y: 14}, 5, {x: 13, y: 14}],
        ['forward extrapolation', {x: 0, y: 0}, {x: 3, y: 0}, 6, {x: 6, y: 0}],
        ['backward extrapolation', {x: 0, y: 0}, {x: 3, y: 0}, -3, {x: -3, y: 0}],
        ['diagonal extrapolation', {x: 0, y: 0}, {x: 3, y: 4}, 10, {x: 6, y: 8}]
    ];
    for (const [name, start, end, distance, expected] of lineCases) {
        it(`handles ${name}`, () => {
            const result = pc.findPointOnLine(start, end, distance);
            expect(result.x).to.be.closeTo(expected.x, 1e-10);
            expect(result.y).to.be.closeTo(expected.y, 1e-10);
        });
    }

    it('returns zero angle for identical points', () => {
        expect(pc.angle({x: 5, y: 5}, {x: 5, y: 5})).to.equal(0);
    });
    // The public angle convention uses the vector from the second point to the first.
    it('preserves the angle convention for a horizontal line pointing right', () => {
        expect(pc.angle({x: 0, y: 0}, {x: 5, y: 0})).to.equal(Math.PI);
    });
    it('preserves the angle convention for a horizontal line pointing left', () => {
        expect(pc.angle({x: 0, y: 0}, {x: -5, y: 0})).to.equal(0);
    });

    for (const [angle, expected] of [
        [0, {x: 5, y: 0}],
        [Math.PI, {x: -5, y: 0}],
        [-Math.PI / 2, {x: 0, y: 5}],
        [2 * Math.PI, {x: 5, y: 0}]
    ]) {
        it(`rotates around the origin by ${angle} radians`, () => {
            const result = pc.rotatePoint({x: 5, y: 0}, {x: 0, y: 0}, angle);
            expect(result.x).to.be.closeTo(expected.x, 1e-10);
            expect(result.y).to.be.closeTo(expected.y, 1e-10);
        });
    }
    it('rotates around a negative center', () => {
        const result = pc.rotatePoint({x: -5, y: -5}, {x: -2, y: -2}, Math.PI / 2);
        expect(result).to.deep.equal({x: -5, y: 1});
    });
    it('leaves an integer point at its own pivot unchanged', () => {
        const result = pc.rotatePoint({x: 10, y: 10}, {x: 10, y: 10}, Math.PI / 2);
        expect(result).to.deep.equal({x: 10, y: 10});
    });
    // README examples explicitly return rounded integer coordinates after rotation.
    it('preserves clockwise rotation and integer rounding at 45 degrees', () => {
        const result = pc.rotatePoint({x: 5, y: 0}, {x: 0, y: 0}, Math.PI / 4);
        expect(result).to.deep.equal({x: 4, y: -4});
    });
});
