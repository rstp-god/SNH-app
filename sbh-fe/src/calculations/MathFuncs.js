const MathFuncArray = []; 


MathFuncArray['formula1']= { 
        id: 1, 
        args: 3, 
        func: sum
};

function sum(a,b,c) {
    return a+b+c; 
}


MathFuncArray['formula2']={ 
    id: 2 , 
    args : 3, 
    func : evalsquare
}; 

function evalsquare(a,b,c) {
    const x1 = a+b; 
    const x2 = c+a; 
    return [x1 ,x2]; 
}

MathFuncArray['formula3']= { 
    id: 3, 
    args: 1,
    func: formula3
};

function formula3(x) {
    return x * x;
};

export default MathFuncArray; 