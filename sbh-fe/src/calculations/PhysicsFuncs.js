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

function LawOfUniversalGravitation(m1,m2,r){
    const G = 6.67*Math.pow(10,-11);
    return (G*m1*m2)/Math.pow(r,2);
}

PhysicsFuncArray.set('LawOfUniversalGravitation', {
    id : 7,
    args: 3,
    func: LawOfUniversalGravitation
});

function AccelNearSurface (M,R) {
    const G = 6.67*Math.pow(10,-11);
    return (G*M)/Math.pow(R,2);
}

PhysicsFuncArray.set('AccelNearSurface' , { 
    id: 8, 
    args: 2, 
    func : AccelNearSurface
})

function AccelAtHofSurface (M,R,h) {
    const G = 6.67*Math.pow(10,-11);
    return (G*M)/Math.pow(R+h,2);
}

PhysicsFuncArray.set('AccelAtHofSurface' , {
    id: 9,
    args: 3,
    func : AccelAtHofSurface
})


export default  PhysicsFuncArray;