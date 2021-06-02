let PhysicsFuncArray = new Map() ;

function DotCoordinatesByTime(start=0,v,t) {
    return start+v*t;
}

PhysicsFuncArray.set('DotCoordinatesByTime', {
     id : 1,
    args : 3,
    func : DotCoordinatesByTime
});

function  SpeedEquableMoving (S,T) {
    return S/T;
}

PhysicsFuncArray.set('SpeedEquableMoving', {
    id : 2,
    args : 2,
    func : SpeedEquableMoving
});

function PathEquableMoving(V,T) {
    return V*T;
}

PhysicsFuncArray.set('PathEquableMoving', {
    id : 3,
    args : 2,
    func : PathEquableMoving
});

function TimeEquableMoving(S,V) {
    return S/V;
}

PhysicsFuncArray.set('TimeEquableMoving',{
    id : 4,
    args : 2,
    func : TimeEquableMoving
});

function PathAccelerationMoving (V,T,a) {
    return V*T+(a*Math.pow(T,2))/2;
}

PhysicsFuncArray.set('PathAccelerationMoving', {
    id : 5,
    args : 3,
    func : PathAccelerationMoving
});

function Wieght(m,g=9.81) {
    return m*g ;
}

PhysicsFuncArray.set('Weight', {
    id : 6,
    args: 3,
    func: Wieght
});


export default  PhysicsFuncArray;