import { Point } from './models/point';

// Security enhancement: Prevent TypeErrors and NaN propagation (DoS vectors) by checking structural typing at runtime.
const assertValidPoint = (point: Point): void => {
    if (!point || typeof point.x !== 'number' || Number.isNaN(point.x) || typeof point.y !== 'number' || Number.isNaN(point.y)) {
        throw new TypeError('Invalid point object provided');
    }
}

const assertValidNumber = (value: number, paramName: string): void => {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new TypeError(`Invalid number provided for ${paramName}`);
    }
}

export const distance = (startPoint: Point, endPoint: Point): number => {
    assertValidPoint(startPoint);
    assertValidPoint(endPoint);
    return Math.hypot((startPoint.x - endPoint.x), (startPoint.y - endPoint.y));
}

export const angle = (startPoint: Point, endPoint: Point): number => {
    assertValidPoint(startPoint);
    assertValidPoint(endPoint);
    return Math.atan2((startPoint.y - endPoint.y), (startPoint.x - endPoint.x));
}

export const rotatePoint = (rotatingPoint: Point, centerPoint: Point, angle: number): Point => {
    assertValidPoint(rotatingPoint);
    assertValidPoint(centerPoint);
    assertValidNumber(angle, 'angle');
	const cos: number = Math.cos(angle);
	const sin: number = Math.sin(angle);
	const nx: number = Math.round((cos * (rotatingPoint.x - centerPoint.x)) + (sin * (rotatingPoint.y - centerPoint.y)) + centerPoint.x);
	const ny: number = Math.round((cos * (rotatingPoint.y - centerPoint.y)) - (sin * (rotatingPoint.x - centerPoint.x)) + centerPoint.y);
	return { x:nx, y:ny };
}

export const translatePoint = (point: Point, distance: number, angle: number = 0): Point => {
    assertValidPoint(point);
    assertValidNumber(distance, 'distance');
    assertValidNumber(angle, 'angle');
    return {
		x:(Math.cos(angle) * distance) + point.x,
		y:(Math.sin(angle) * distance) + point.y
	};
}

export const findPointOnLine = (startPoint: Point, endPoint: Point, distanceFromStart: number): Point => {
    assertValidPoint(startPoint);
    assertValidPoint(endPoint);
    assertValidNumber(distanceFromStart, 'distanceFromStart');
    const fullDistance: number = distance(startPoint, endPoint);
    // Security concern: prevent division by zero resulting in NaN values
    // propagating through the application and causing instability or DoS.
    if (fullDistance === 0) {
        return { ...startPoint };
    }
	const ratio: number = distanceFromStart / fullDistance;
	return {
		x:((1-ratio) * startPoint.x + (ratio) * endPoint.x),
		y:((1-ratio) * startPoint.y + (ratio) * endPoint.y)
	};
}