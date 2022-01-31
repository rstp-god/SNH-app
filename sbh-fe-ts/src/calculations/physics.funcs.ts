import {FormulaObj} from "../types/common.types";

const PhysicsFuncMap = new Map<string, FormulaObj>();

function DotCoordinatesByTime(start: number = 0, velocity: number, time: number): number {
    return start + velocity * time;
}

PhysicsFuncMap.set('DotCoordinatesByTime', {
    id: 1,
    args: 3,
    func: DotCoordinatesByTime
});

function SpeedEquableMoving(path: number, time: number): number {
    return path / time;
}

PhysicsFuncMap.set('SpeedEquableMoving', {
    id: 2,
    args: 2,
    func: SpeedEquableMoving
});

function PathEquableMoving(velocity: number, time: number): number {
    return velocity * time;
}

PhysicsFuncMap.set('PathEquableMoving', {
    id: 3,
    args: 2,
    func: PathEquableMoving
});

function TimeEquableMoving(path: number, velocity: number): number {
    return path / velocity;
}

PhysicsFuncMap.set('TimeEquableMoving', {
    id: 4,
    args: 2,
    func: TimeEquableMoving
});

function PathAccelerationMoving(velocity: number, time: number, accel: number): number {
    return velocity * time + (accel * Math.pow(time, 2)) / 2;
}

PhysicsFuncMap.set('PathAccelerationMoving', {
    id: 5,
    args: 3,
    func: PathAccelerationMoving
});

function Weight(weight: number, g = 9.81): number {
    return weight * g;
}

PhysicsFuncMap.set('Weight', {
    id: 6,
    args: 3,
    func: Weight
});

function LawOfUniversalGravitation(firstWeight: number, secondWeight: number, distance: number): number {
    const G = 6.67 * Math.pow(10, -11);
    return (G * firstWeight * secondWeight) / Math.pow(distance, 2);
}

PhysicsFuncMap.set('LawOfUniversalGravitation', {
    id: 7,
    args: 3,
    func: LawOfUniversalGravitation
});

function AccelNearSurface(weight: number, distance: number): number {
    const G = 6.67 * Math.pow(10, -11);
    return (G * weight) / Math.pow(distance, 2);
}

PhysicsFuncMap.set('AccelNearSurface', {
    id: 8,
    args: 2,
    func: AccelNearSurface
})

function AccelAtHofSurface(weight: number, planetRadius: number, height: number): number {
    const G = 6.67 * Math.pow(10, -11);
    return (G * weight) / Math.pow(planetRadius + height, 2);
}

PhysicsFuncMap.set('AccelAtHofSurface', {
    id: 9,
    args: 3,
    func: AccelAtHofSurface
})

function ForceMoment(force: number, distance: number): number {
    return force * distance;
}

PhysicsFuncMap.set('ForceMoment', {
    id: 10,
    args: 2,
    func: ForceMoment
})

function Density(weight: number, velocity: number): number {
    return weight / velocity;
}

PhysicsFuncMap.set('Density', {
    id: 11,
    args: 2,
    func: Density
})


export default PhysicsFuncMap;