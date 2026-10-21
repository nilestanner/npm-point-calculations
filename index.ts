import { Point } from './models/point';

export const distance = (startPoint: Point, endPoint: Point): number => {
    return Math.hypot((startPoint.x - endPoint.x), (startPoint.y - endPoint.y));
}

export const angle = (startPoint: Point, endPoint: Point): number => {
    return Math.atan2((startPoint.y - endPoint.y), (startPoint.x - endPoint.x));
}

export const rotatePoint = (rotatingPoint: Point, centerPoint: Point, angle: number): Point => {
	const cos: number = Math.cos(angle);
	const sin: number = Math.sin(angle);
    // Security enhancement: coerce centerPoint coordinates to numbers to prevent
    // type confusion and unintended string concatenation if string inputs are provided.
	const nx: number = Math.round((cos * (rotatingPoint.x - centerPoint.x)) + (sin * (rotatingPoint.y - centerPoint.y)) + Number(centerPoint.x));
	const ny: number = Math.round((cos * (rotatingPoint.y - centerPoint.y)) - (sin * (rotatingPoint.x - centerPoint.x)) + Number(centerPoint.y));
	return { x:nx, y:ny };
}

export const translatePoint = (point: Point, distance: number, angle: number = 0): Point => {
    // Security enhancement: coerce point coordinates to numbers to prevent
    // type confusion and unintended string concatenation.
    return {
		x:(Math.cos(angle) * distance) + Number(point.x),
		y:(Math.sin(angle) * distance) + Number(point.y)
	};
}

export const findPointOnLine = (startPoint: Point, endPoint: Point, distanceFromStart: number): Point => {
    const fullDistance: number = distance(startPoint, endPoint);
    // Security concern: prevent division by zero resulting in NaN values
    // propagating through the application and causing instability or DoS.
    if (fullDistance === 0) {
        return { ...startPoint };
    }
	const ratio: number = distanceFromStart / fullDistance;
    // Security enhancement: coerce startPoint coordinates to numbers to prevent
    // type confusion and unintended string concatenation.
	return {
		x:((1-ratio) * Number(startPoint.x) + (ratio) * Number(endPoint.x)),
		y:((1-ratio) * Number(startPoint.y) + (ratio) * Number(endPoint.y))
	};
}