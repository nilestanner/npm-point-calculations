import { Point } from './models/point';

// Security enhancement: Validate inputs to prevent type confusion, NaN propagation, and unexpected behaviors
const validatePoint = (p: Point): void => {
    if (!p || typeof p.x !== 'number' || typeof p.y !== 'number' || Number.isNaN(p.x) || Number.isNaN(p.y)) {
        throw new TypeError('Invalid Point: x and y must be valid numbers');
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
	const cos: number = Math.cos(angle);
	const sin: number = Math.sin(angle);
	const nx: number = Math.round((cos * (rotatingPoint.x - centerPoint.x)) + (sin * (rotatingPoint.y - centerPoint.y)) + centerPoint.x);
	const ny: number = Math.round((cos * (rotatingPoint.y - centerPoint.y)) - (sin * (rotatingPoint.x - centerPoint.x)) + centerPoint.y);
	return { x:nx, y:ny };
}

export const translatePoint = (point: Point, distance: number, angle: number = 0): Point => {
    validatePoint(point);
    return {
		x:(Math.cos(angle) * distance) + point.x,
		y:(Math.sin(angle) * distance) + point.y
	};
}

export const findPointOnLine = (startPoint: Point, endPoint: Point, distanceFromStart: number): Point => {
    validatePoint(startPoint);
    validatePoint(endPoint);
    const fullDistance: number = distance(startPoint, endPoint);
    // Security concern: prevent division by zero resulting in NaN values
    // propagating through the application and causing instability or DoS.
    if (fullDistance === 0) {
        // Prevent property injection/prototype pollution by returning strict format
        return { x: startPoint.x, y: startPoint.y };
    }
	const ratio: number = distanceFromStart / fullDistance;
	return {
		x:((1-ratio) * startPoint.x + (ratio) * endPoint.x),
		y:((1-ratio) * startPoint.y + (ratio) * endPoint.y)
	};
}
