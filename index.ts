import { Point } from './models/point';

// Security enhancement: Validate point inputs to prevent prototype pollution and NaN/Infinity propagation
const validatePoint = (p: Point): void => {
    if (!p || typeof p.x !== 'number' || typeof p.y !== 'number' || !Number.isFinite(p.x) || !Number.isFinite(p.y)) {
        throw new Error('Invalid point coordinates');
    }
};

export const distance = (startPoint: Point, endPoint: Point): number => {
    validatePoint(startPoint);
    validatePoint(endPoint);
    return Math.hypot((startPoint.x - endPoint.x), (startPoint.y - endPoint.y));
}

export const angle = (startPoint: Point, endPoint: Point): number => {
    validatePoint(startPoint);
    validatePoint(endPoint);
    return Math.atan2((startPoint.y - endPoint.y), (startPoint.x - endPoint.x));
}

export const rotatePoint = (rotatingPoint: Point, centerPoint: Point, angle: number): Point => {
    validatePoint(rotatingPoint);
    validatePoint(centerPoint);
    if (typeof angle !== 'number' || !Number.isFinite(angle)) throw new Error('Invalid angle');
	const cos: number = Math.cos(angle);
	const sin: number = Math.sin(angle);
	const nx: number = Math.round((cos * (rotatingPoint.x - centerPoint.x)) + (sin * (rotatingPoint.y - centerPoint.y)) + centerPoint.x);
	const ny: number = Math.round((cos * (rotatingPoint.y - centerPoint.y)) - (sin * (rotatingPoint.x - centerPoint.x)) + centerPoint.y);
	return { x:nx, y:ny };
}

export const translatePoint = (point: Point, distance: number, angle: number = 0): Point => {
    validatePoint(point);
    if (typeof distance !== 'number' || !Number.isFinite(distance) || typeof angle !== 'number' || !Number.isFinite(angle)) {
        throw new Error('Invalid numeric parameters');
    }
    return {
		x:(Math.cos(angle) * distance) + point.x,
		y:(Math.sin(angle) * distance) + point.y
	};
}

export const findPointOnLine = (startPoint: Point, endPoint: Point, distanceFromStart: number): Point => {
    validatePoint(startPoint);
    validatePoint(endPoint);
    if (typeof distanceFromStart !== 'number' || !Number.isFinite(distanceFromStart)) {
        throw new Error('Invalid distance');
    }
    const fullDistance: number = distance(startPoint, endPoint);
    // Security enhancement: Prevent division by zero which can cause NaN propagation/DoS
    if (fullDistance === 0) throw new Error('Start and end points cannot be the same');
	const ratio: number = distanceFromStart / fullDistance;
	return {
		x:((1-ratio) * startPoint.x + (ratio) * endPoint.x),
		y:((1-ratio) * startPoint.y + (ratio) * endPoint.y)
	};
}
