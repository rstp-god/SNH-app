export default [
    {
        id: 1, 
        args: 3, 
        func: sum
    }, 
    { 
        id: 2 , 
        args : 3, 
        func : evalsquare
    }
]

function sum(a,b,c) {
    return a+b+c; 
}

function evalsquare(a,b,c) {
    const x1 = a+b; 
    const x2 = c+a; 
    return [x1 ,x2]; 
}

//ZARABOTAI