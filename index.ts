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
	const nx: number = Math.round((cos * (centerPoint.x - rotatingPoint.x)) + (sin * (centerPoint.y - rotatingPoint.y)) + rotatingPoint.x);
	const ny: number = Math.round((cos * (centerPoint.y - rotatingPoint.y)) - (sin * (centerPoint.x - rotatingPoint.x)) + rotatingPoint.y);
	return { x:nx, y:ny };
}

export const translatePoint = (point: Point, distance: number, angle: number = 0): Point => {
    return {
		x:(Math.cos(angle) * distance) + point.x,
		y:(Math.sin(angle) * distance) + point.y
	};
}

export const findPointOnLine = (startPoint: Point, endPoint: Point, distanceFromStart: number): Point => {
    const fullDistance: number = distance(startPoint, endPoint);
	const ratio: number = distanceFromStart / fullDistance;
	return {
		x:((1-ratio) * startPoint.x + (ratio) * endPoint.x),
		y:((1-ratio) * startPoint.y + (ratio) * endPoint.y)
	};
}